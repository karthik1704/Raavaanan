from  django.urls import path

from .views import (
    GoogleLogin,
    OTPResendView,
    PhonePasswordResetView,
    PhonePasswordResetVerifyView
)
urlpatterns = [
    path('password/reset/phone/', PhonePasswordResetView.as_view(), name="password_reset_phone"),
    path('password/reset/phone/verify/', PhonePasswordResetVerifyView.as_view(), name="password_reset_phone_verify"),
    path('phone/resend/', OTPResendView.as_view(), name="resend_otp"),
    path('google/', GoogleLogin.as_view(), name="google_login"),
    
]