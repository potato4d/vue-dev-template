require('dotenv').config();

var gulp = require("gulp");
var s3 = require("gulp-s3-upload")({
	"accessKeyId"    : process.env.S3_KEY,
	"secretAccessKey": process.env.S3_SECRET
});

gulp.task("deploy", function(){
	return gulp.src([
			"./public_html/**"
		])
		.pipe(s3({
			Bucket: process.env.S3_BUCKET,
			ACL: "public-read"
		}))
});