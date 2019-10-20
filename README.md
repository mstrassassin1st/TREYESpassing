# TREYESpassing
TREYESpassing is an app that alerts it's user when someone entered an area that is 
owned by the user and access to the area is prohibited for everyone.

This is the frontend side (actually quite the backend side as well.

This app is developed using Django to handle the database and AI

The rest is Progressive Web App (currently still not fully working) handled by Node.js to display the results upfront.

Concept: 

PWA(Node.js) requests -> Django -> AI Engine -> Django -> PWA(Node.js) response received -> displayed results(notification(s))

To use this app, you will need:

<ul>
  <li>Python 3.6.9</li>
  <li>Tensorflow 1.10.0</li>
  <li>Django 2.2.5</li>
  <li>h5py 2.8.0  </li>
  <li>OpenCV 3.4.2</li>
</ul>
<ul>
  <li>npm version 6.9.0</li>
  <li>node v10.16.3</li>
  <li>axios js</li>
  <li>jQuery</li>
  <li>Promise js</li>
</ul>

please refer to npm installs you can find on how to install js plugins into node.js workspace using npm.

This is not finished yet. The readme will be updated on future finishes.
