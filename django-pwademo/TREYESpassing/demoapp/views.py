from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import videomain as videoProcesser
from .models import Notification


def processVideo(request):
  print("da")
  # signals.check_request_enabled.connect(True)
  if request.method == "GET":
      detected = videoProcesser.process()
      if detected:
        response = JsonResponse({"detected": "Trespasser detected!"})
      else:
        response = JsonResponse({"detected": "No trespasser detected!"})
      
  else:
    response = JsonResponse({"error": "there was an error"})
    response.status_code = 403
    
  response["Access-Control-Allow-Origin"] = "*"
  response["Access-Control-Allow-Methods"] = "*"
  response["Access-Control-Max-Age"] = "1000"
  response["Access-Control-Allow-Headers"] = "*"
  return response   

def get_notif(request):
  print("no")
  if request.method == "GET":
    returnedList = Notification.objects.all().order_by("-date")
    parent_dict = {}
    listOfNotif = []
    for item in returnedList:
      splitter = str(item).split('#')
      result = {
        'header' : splitter[0],
        'timestamp' : splitter[1],
        'img' : splitter[2] 
      }
      listOfNotif.append(result)
    parent_dict["status"] = "ok"
    parent_dict["notifications"] = listOfNotif
    return JsonResponse(parent_dict)