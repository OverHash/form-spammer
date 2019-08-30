# Google Form Send

## Install
```bash
npm install --save google-form-send
```


## Usage
Module require:
```js
var GoogleForm = require('google-form-send')
//  or
import GoogleForm from 'google-form-send'
```

Example 1:
```js
var form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbKLsdDalskjd')

form.addField('entry.6733457', 'text 1')
form.addField('entry.6732399', 'text 2')

form.send()
```

Example 2:
```js
var form = new GoogleForm('https://docs.google.com/forms/d/e/1FAIpQLSekDHkNfYUfFS0gKSBNbKLsdDalskjd')

var data = {
  'entry.6733457': 'text 1',
  'entry.6732399': 'text 2'
}
form.setAllFields(data)

form.send(true)
```


## Functions
```js
constructor GoogleForm(formAdress)
/** Parameters
  * formAdress - address on google form
  */

GoogleForm.addField(name, [text]) // function for set every fields
/** Parameters
  * name - name field
  * text(Default: '') - text field
  */

GoogleForm.setAllFields(data) // function for setting all fields
/** Parameters
  * data - object with data. Example object: {'name1': 'text 1', 'name2': 'text 2'}
  */

GoogleForm.send([isAsyn]) // function for send GET request on Google Form
/** Parameters
  * isAsyn(Default: false) - make an asynchronous GET request
  */
```