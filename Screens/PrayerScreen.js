import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  ActivityIndicator
} from 'react-native'

import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../helpers/constants'
import CustomActivityIndicator from '../components/CustomActivityIndicator'
import { ActivityContext } from '../components/Providers/ActivityProvider'
const PRAYER_REQUEST_SCHEMA = Yup.object().shape({
  name: Yup.string().min(3, 'Enter valid name!').required('Name is required'),
  address: Yup.string(),
  phone: Yup.string().required('Phone is required'),
  request: Yup.string().max(320,({max}) => `Prayer Request can't be more than ${max} characters` ).required('Details are required'),
});

const PrayerScreen = ({navigation}) => {
  // const {activity, setActivity} = React.useContext(ActivityContext)
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  if (submitting)
    return <CustomActivityIndicator>
        <ActivityIndicator size="large" color={COLORS.PINK} />
    </CustomActivityIndicator>

  if (submitted) {
    return <CustomActivityIndicator>
      <Text style={GLOBAL_STYLES.successTextonDark}>Prayer request sent!</Text>
      <Button title="Go Back" onPress={() => {
        setSubmitted(false)
        navigation.setOptions({headerShown:true})
      }
      } />
      </CustomActivityIndicator>
  }

  return (
    <Formik
      initialValues={{ name: '', address: '', phone: '', request: '' }}
      validateOnMount={true}
      validationSchema={PRAYER_REQUEST_SCHEMA}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        setSubmitting(true)
        navigation.setOptions({headerShown: false})
        setTimeout(() => {
          setSubmitting(false)
          setSubmitted(true)
        }, 2000)
        resetForm()
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <SafeAreaView style={GLOBAL_STYLES.formWrapper}>
          <View style={GLOBAL_STYLES.fieldWrapper}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="What's your name?"
              style={GLOBAL_STYLES.field}
            />
          </View>
          {errors.name && touched.name && <Text style={GLOBAL_STYLES.errorText}>{errors.name}</Text>}
          <View style={GLOBAL_STYLES.fieldWrapper}>
            <TextInput
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              value={values.address}
              placeholder="Where do you live?"
              style={GLOBAL_STYLES.field}
            />
          </View>
          {errors.address && touched.address && <Text style={GLOBAL_STYLES.textError}>{errors.address}</Text>}
          <View style={GLOBAL_STYLES.fieldWrapper}>
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType='phone-pad'
              style={GLOBAL_STYLES.field}
              placeholder="What's your phone number?"
            />
          </View>
          {errors.phone && touched.phone && <Text style={GLOBAL_STYLES.errorText}>{errors.phone}</Text>}
          <View style={GLOBAL_STYLES.fieldWrapper}>
            <TextInput
              onChangeText={handleChange('request')}
              onBlur={handleBlur('request')}
              value={values.request}
              placeholder="What do you want to pray for?"
              style={GLOBAL_STYLES.field}
              multiline={true}
            />
          </View>
          {errors.request && touched.request && <Text style={GLOBAL_STYLES.errorText}>{errors.request}</Text>}
        <View style={GLOBAL_STYLES.requestPrayerButton}>
          <Button
            rounded
            disabled={!isValid}
            title='Submit'
            onPress={handleSubmit}
            color={COLORS.PURPLE}
          />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  )
}

export default PrayerScreen