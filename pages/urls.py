from django.urls import path

from .views import DashboardView, HomePageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path("test-dashboard", DashboardView.as_view(), name="dashboard")
]