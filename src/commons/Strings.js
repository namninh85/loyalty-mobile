/*
*
@author tri.tran on 2/15/19
*
*/

export function getStrings() {
    //multi language
    return strings.en
}

const strings = {
    en: {
        welcome: 'Welcome to WE Services',
        email: 'Email',
        passWord: 'Password',
        login: 'Sign In',
        descriptionLoginForm: 'By signing up, I agree to Loyalty Vietnam ',
        and: ' and ',
        rememberMe: 'Remember me',
        forgotPass: 'Forgot Password',
        cancel: 'Cancel',
        resetPass: 'Reset Password',
        termConditions: ' Terms & Conditions ',
        privacy: ' Community Guidelines Privacy Policy ',
        firstName: 'First Name',
        lastName: 'Last Name',
        dateOfBirth: 'Date of Birth',
        submit: 'Submit',
        aboutMe: 'About Me',
        interest: 'I’m interested in',
        //noticed dialog
        noticedDialogButton: 'Ok',
        error: 'Error',
        noInternetConnection: 'No internet connection',
        timeOutError: 'Request time out',
        new: 'New',
        pending: 'Pending',
        accepted: 'Accepted',
        inProgress: 'In-Progress & Pending Payment',
        appointments: 'Appointments',
        overView: 'Overview',
        nextAppointment: 'Next Appointment',
        // setting
        hello: "Hello,",
        profile: "Profile",
        appointmentHistory: "Appointment History",
        logout: "Logout",
        phoneNumber: "Phone Number",
        description: "Description",
        changePassword: "Change Password",
        forgetPassword: "Forget Password",
        changeAvatar: "Change Avatar",
        changeSplashImage: "Change Splash Image",
        staffName: "Staff Name",
        haveError: "Something went wrong. Please try again.",
        currentPassword: "Current Password",
        newPassword: "New Password",
        confirmPassword: "Confirm Password",
        describeProductScreen: "We have promotions and deals from our specialty stores lined up for you.",
        contenSpecialOfferScreen: "Loyalty always brings you new, special, attractive and exciting promotions, from Monthly Promotions, Cheap Prices to daily meals that you can't miss.",
        registerDate: (time) => {return  "Member since " + time},
        remindScanQRCode: (name) => {return "Hey " + name + ", don’t forget to scan your unique QR code to earn points when you shop at Loyalty Vietnam"},
        pointVoucher: (point) => {return point + ' points each'},
        balanceText: "Current Balance Points",
        available: "available"
    }
}
