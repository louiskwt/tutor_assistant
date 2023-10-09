from django.test import TestCase
from django.urls import reverse


class PageTests(TestCase):
    def test_url_exists_at_correct_location(self):
        res = self.client.get("/")
        self.assertEqual(res.status_code, 200)
    
    def test_homepage_view(self):
        res = self.client.get(reverse("home"))
        self.assertEqual(res.status_code, 200)
        self.assertTemplateUsed(res, "home.html")