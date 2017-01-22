var express = require('express');
var TxtInput = require('./../models/txtinput');
var TechInput = require('./../models/techinput');
var MaterialsInput = require('./../models/materialsinput');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/index', function(req, res) {
    res.render('index');
});

router.get('/have', function(req, res) {
    res.render('have');
});

router.get('/need', function(req, res) {
    res.render('need');
});

router.get('/txtInput', function(req, res) {
    res.render('txtInput');
});

router.post('/txtInput', function(req, res) {
    var txtInput = new TxtInput({
        course_code: req.body.course_code,
        bookname: req.body.bookname,
        isbn: req.body.isbn,
        condition: req.body.condition,
        price: req.body.price,
        pic_url: req.body.pic_url,
        contact_info: req.body.contact_info
    });

    console.log(txtInput);
    txtInput.saveInput();

    //REDIRECT THIS LATER TO A THANK YOU PAGE
    res.redirect('/thankyou');
});

router.get('/materialsInput', function(req, res) {
    res.render('materialsInput');
});

router.post('/materialsInput', function(req, res) {
     var materialsInput = new MaterialsInput({
        study_material: req.body.study_material,
        course_code: req.body.course_code,
        contact_info: req.body.contact_info
    });

    console.log(materialsInput);
    materialsInput.saveInput();

    //REDIRECT THIS LATER TO A THANK YOU PAGE
    res.redirect('/thankyou');
});

router.get('/techInput', function(req, res) {
    res.render('techInput');
});

router.post('/techInput', function(req, res) {
    var techInput = new TechInput({
        study_material: req.body.study_material,
        course_code: req.body.course_code,
        contact_info: req.body.contact_info
    });


    console.log(techInput);
    techInput.saveInput();

    //REDIRECT THIS LATER TO A THANK YOU PAGE
    res.redirect('/thankyou');
});

router.get('/thankyou', function(req, res) {
   res.render('thankyou'); 
});

//SEARCH SEARCH SEARCH

router.get('/txtSearch', function(req, res) {
    res.render('txtSearch');
});

router.get('/materialsSearch', function(req, res) {
    res.render('materialsSearch');
});

router.get('/techSearch', function(req, res) {
    res.render('techSearch');
});


router.post('/txtSearch', function(req, res) {
    var courseRegex = new RegExp(req.body.course_code, 'gi');
    var bookRegex = new RegExp(req.body.bookname, 'i');
    var isbnRegex = new RegExp(req.body.isbn, 'gi');

    TxtInput.find({course_code: courseRegex, bookname: bookRegex, isbn: isbnRegex}, function(err, courses) {
        if (err) console.error(err);
    
        if (courses == false) {
           res.render('displayText', {courses: courses});
        } else {
            res.render('displayText', {courses: courses});
        }
    });

});

router.post('/techSearch', function(req, res) {

    var techMaterialRegex = new RegExp(req.body.tech_material, 'gi');
    var courseCodeRegex = new RegExp(req.body.course_code, 'gi');

    TechInput.find({study_material: techMaterialRegex, course_code: courseCodeRegex}, function(err, tech) {
        if (err) console.error(err);

        // console.log(tech);
        // if (tech == false) {
        //     res.send('No data was found');
        // } else {
        //     res.json(tech);
        // }

        if (tech == false) {
            res.render('displayTech', {tech: tech});
        } else {
            res.render('displayTech', {tech: tech});
        }

    });
});

router.post('/materialsSearch', function(req, res) {

    var studyMaterialRegex = new RegExp(req.body.study_material, 'gi');
    var courseCodeRegex = new RegExp(req.body.course_code, 'gi');

    MaterialsInput.find({study_material: studyMaterialRegex, course_code: courseCodeRegex}, function(err, materials) {
        if (err) console.error(err);

        console.log(materials);
        // if (materials == false) {
        //     res.send('No data was found');
        // } else {
        //     res.json(materials);
        // }

        if (materials == false) {
            res.render('displayMaterials', {materials: materials});
        } else {
            res.render('displayMaterials', {materials: materials});
        }

    });
});


module.exports = router;