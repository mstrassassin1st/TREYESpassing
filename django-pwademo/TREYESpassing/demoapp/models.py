from django.db import models

class Notification(models.Model):
    notifheader = models.CharField(max_length=100)
    date = models.DateTimeField()
    image = models.TextField()

    def __str__(self):
        return self.notifheader + ' ' + str(self.date) + ' ' + str(self.image)