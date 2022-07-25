import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Separator, ToggleButton, AppTextInput, AppButton, ErrorMessage } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, Fonts, Images } from '../constants';
import { Display } from '../utils';
import LottieView from 'lottie-react-native';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});


const LoginScreen = ({ navigation }) => {

    const [isPasswordShow, setIsPasswordShow] = useState(false);
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor={Colors.DEFAULT_WHITE}
                        translucent
                    />
                    <Separator height={StatusBar.currentHeight} />
                    <Separator height={Display.setHeight(8)} />

                    <View style={styles.headerContainer}>
                        <Ionicons
                            name="chevron-back-outline"
                            size={30}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.headerTitle}>Sign In</Text>
                    </View>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.content}>
                        Enter your email and password, and enjoy ordering food
                    </Text>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                <View style={styles.inputContainer}>
                                    <View style={styles.inputSubContainer}>
                                        <MaterialCommunityIcons
                                            name="email"
                                            size={22}
                                            color={Colors.DEFAULT_GREY}
                                            style={{ marginRight: 10 }}
                                        />
                                        <AppTextInput
                                            placeholder="Email"
                                            placeholderTextColor={Colors.DEFAULT_GREY}
                                            selectionColor={Colors.DEFAULT_GREY}
                                            style={styles.inputText}
                                            onBlur={() => setFieldTouched("email")}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            keyboardType="email-address"
                                            onChangeText={handleChange("email")}
                                            textContentType="emailAddress"
                                        />
                                    </View>

                                </View>
                                {/* <AppText style={{ color: 'red', marginHorizontal: 12, padding: 10 }}>{errors.email}</AppText> */}
                                <ErrorMessage error={errors.email} visible={touched.email} />
                                <Separator height={15} />
                                <View style={styles.inputContainer}>
                                    <View style={styles.inputSubContainer}>
                                        <Feather
                                            name="lock"
                                            size={22}
                                            color={Colors.DEFAULT_GREY}
                                            style={{ marginRight: 10 }}
                                        />
                                        <TextInput
                                            secureTextEntry={isPasswordShow ? false : true}
                                            placeholder="Password"
                                            placeholderTextColor={Colors.DEFAULT_GREY}
                                            selectionColor={Colors.DEFAULT_GREY}
                                            style={styles.inputText}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            textContentType="password"
                                            onChangeText={handleChange("password")}
                                            onBlur={() => setFieldTouched("password")}
                                        />

                                        <Feather
                                            name={isPasswordShow ? 'eye' : 'eye-off'}
                                            size={22}
                                            color={Colors.DEFAULT_GREY}
                                            style={{ marginRight: 10 }}
                                            onPress={() => setIsPasswordShow(!isPasswordShow)}
                                        />

                                    </View>
                                </View>
                                {/* <AppText style={{ color: 'red', marginHorizontal: 12, padding: 10 }}>{errors.password}</AppText> */}
                                <ErrorMessage error={errors.password} visible={touched.password} />
                                <View style={styles.forgotPasswordContainer}>
                                    <View style={styles.toggleContainer}>
                                        <ToggleButton size={0.5} />
                                        <Text style={styles.rememberMeText}>Remember me</Text>
                                    </View>
                                    <Text
                                        style={styles.forgotPasswordText}
                                        onPress={() => navigation.navigate('ForgotPassword')}>
                                        Forgot Password
                                    </Text>
                                </View>
                                <View>

                                    {/* style={styles.signinButton}
                        // onPress={() => signIn()}
                        activeOpacity={0.8}>
                        {isLoading ? (
                            <LottieView source={Images.LOADING} autoPlay />
                        ) : (
                            <Text style={styles.signinButtonText}>Sign In</Text>
                        )} */}
                                    <Separator height={StatusBar.currentHeight} />
                                    <Separator height={Display.setHeight(3)} />
                                    <AppButton title="Login" onPress={handleSubmit} />

                                </View>

                            </>
                        )}
                    </Formik>

                    <View style={styles.signupContainer}>
                        <Text style={styles.accountText}>Don't have an account?</Text>
                        <Text
                            style={styles.signupText}
                            onPress={() => navigation.navigate('Signup')}
                        >
                            Sign Up
                        </Text>
                    </View>
                    <Text style={styles.orText}>OR</Text>
                    <TouchableOpacity style={styles.facebookButton}>
                        <View style={styles.socialButtonsContainer}>
                            <View style={styles.signinButtonLogoContainer}>
                                <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
                            </View>
                            <Text style={styles.socialSigninButtonText}>
                                Connect with Facebook
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleButton}>
                        <View style={styles.socialButtonsContainer}>
                            <View style={styles.signinButtonLogoContainer}>
                                <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
                            </View>
                            <Text style={styles.socialSigninButtonText}>Connect with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_WHITE,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        width: Display.setWidth(80),
        textAlign: 'center',
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        lineHeight: 20 * 1.4,
        marginTop: 50,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    content: {
        fontSize: 20,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: Colors.LIGHT_GREY,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.LIGHT_GREY2,
        justifyContent: 'center',
    },
    inputSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        fontSize: 18,
        textAlignVertical: 'center',
        padding: 0,
        height: Display.setHeight(6),
        color: Colors.DEFAULT_BLACK,
        flex: 1,
    },
    forgotPasswordContainer: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rememberMeText: {
        marginLeft: 10,
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREY,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    forgotPasswordText: {
        fontSize: 12,
        lineHeight: 12 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_BOLD,
    },
    signinButton: {
        backgroundColor: Colors.DEFAULT_GREEN,
        borderRadius: 8,
        marginHorizontal: 20,
        height: Display.setHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    signinButtonText: {
        fontSize: 18,
        lineHeight: 18 * 1.4,
        color: Colors.DEFAULT_WHITE,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    signupContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    signupText: {
        fontSize: 13,
        lineHeight: 13 * 1.4,
        color: Colors.DEFAULT_GREEN,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
    },
    orText: {
        fontSize: 15,
        lineHeight: 15 * 1.4,
        color: Colors.DEFAULT_BLACK,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginLeft: 5,
        alignSelf: 'center',
    },
    facebookButton: {
        backgroundColor: Colors.FABEBOOK_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        backgroundColor: Colors.GOOGLE_BLUE,
        paddingVertical: 15,
        marginHorizontal: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signinButtonLogo: {
        height: 18,
        width: 18,
    },
    signinButtonLogoContainer: {
        backgroundColor: Colors.DEFAULT_WHITE,
        padding: 2,
        borderRadius: 3,
        position: 'absolute',
        left: 25,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    socialSigninButtonText: {
        color: Colors.DEFAULT_WHITE,
        fontSize: 13,
        lineHeight: 13 * 1.4,
        fontFamily: Fonts.POPPINS_MEDIUM,
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 10,
        lineHeight: 10 * 1.4,
        color: Colors.DEFAULT_RED,
        fontFamily: Fonts.POPPINS_MEDIUM,
        marginHorizontal: 20,
        marginTop: 3,
        marginBottom: 10,
    },

});

export default LoginScreen;