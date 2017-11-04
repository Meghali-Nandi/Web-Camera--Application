import os
from datetime import timedelta

from flask import Flask, render_template , send_from_directory,redirect, url_for, request,jsonify

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'

@app.route('/')
def index():
    print("log:request for cameraApp.html recieved")
    return render_template('camtry.html')

@app.route('/senddata',methods=['POST'])
def senddata():
    received_data=[]
    received_data.append(request.data)
    print("received data")
    print(request.data)
    
    return ("True")     
   
#@app.route('/newpage')
#def mainpage():
     
 #    return render_template('/newpage.html')     

'''



def rajatfunc():           #to be added by rajat which sends authorized
    return False

@socketio.on('my event')
def handle_my_custom_event(data):
    print(data)
    

@socketio.on('blob-data')
def receive_message(blobData):
    print("log: recieving blob data")
    n#parr = np.fromstring(blobData, np.uint8)
    #img_np = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    #cv2.imshow('image' , img_np)
    #cv2.waitKey(0)


@socketio.on('android-blob-data_event')
def receive_message(android_blobData):
    print("log: receiving image data")
    #nparr = np.fromstring(android_blobData, np.uint8)
    #img_np = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
    #cv2.imshow('image', img_np)
    
def ack():
    print ('message was received by client!')

@socketio.on('authorization-data-event')
def authorization_data(message):
    
    emit('image_response', message, callback=ack)


    
@socketio.on('disconnect')
def disconnect():
    print("disconnected")'''

if __name__ == '__main__':
    print("log: The server is started")
    app.run()

    print("log: the server is stopped")





