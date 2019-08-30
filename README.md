# google-form-send
 sends google form data, I would advise against using this as google may block you. useful for trolling classmates

## Warnings
Google may block you if you use this too much. I have limited to 10 form responses/second. I would not advise going above 5-6.
THIS WILL NOT WORK ON FORMS WHERE YOU NEED TO LOGIN/LIMITED TO ONE RESPONSE
This tutorial is designed for google chrome

## Installation
Change config.json to your preffered data.
To get a form id, look at the url of the form, and find the long string of text
![how to get form id](https://raw.githubusercontent.com/OverHash/form-spammer/master/images/formId.png)

For the form data, you need to send a form request yourself. Open Inspect Element by pressing `ctrl + shift + i` and click on the network tab
![how to get inspect element open](https://raw.githubusercontent.com/OverHash/form-spammer/master/images/inspectElement.png)

Fill in the form and click submit, you should see a formResponse pop up
![get form response](https://raw.githubusercontent.com/OverHash/form-spammer/master/images/formResponse.png)

Click on the formResponse and scroll down until you get to the `Form Data` Page. This is where all the form data is located
![get form data](https://raw.githubusercontent.com/OverHash/form-spammer/master/images/formData.png)

Enter all the form data into the config file.