## Installation

Clone this repository on your local computer.

```shell
git clone https://github.com/ruraltoroyal/node-bulk-resize-images.git
cd node-bulk-resize-images/
```

Run npm install

```shell
npm install
```


## Configuration

Modify paramaters as required.
^You can use `sharp.fit.inside` to resize images maintaining their aspect ratio but without any cropping.

```
const params = {
	'src' : path.resolve( __dirname, 'src'),
	'dest' : path.resolve( __dirname, 'dest'),
	'width'  : 900,
	'height' : 900,
	'sharp' : {
		fit: sharp.fit.cover,
		withoutEnlargement: true
	}
};
```

## Run Bulk Resize/Crop

```shell
npm start
```