

var nodes = null;
var edges = null;
var network = null;
var fixed= true;

// Called when the Visualization API is loaded.
function draw() {
  // create people.
  // value corresponds with the age of the person
  var DIR = "";
  nodes = [
    { id: 1, shape: "image", image: DIR + "newsblue.png" ,   label: "11111"},
    { id: 2, shape: "image", image: DIR + "orangeinn.png" ,   label: "2"},
    { id: 3, shape: "image", image: DIR + "greenunrest.png" ,   label: "3"},
    {
      id: 4,
      shape: "image",
      image: DIR + "profile.png",
      label: ""
    },
    { id: 5, shape: "image", image: DIR + "lighteu.png",   label: "5" },
    { id: 6, shape: "image", image: DIR + "lightasia.png" ,   label: "6"},
    { id: 7, shape: "image", image: DIR + "newsblue.png",   label: "7" },
    { id: 8, shape: "image", image: DIR + "8.png" ,   label: "8"},
    { id: 9, shape: "image", image: DIR + "youtube.jpg",   label: "9"},
    { id: 10, shape: "image", image: DIR + "yellowstudy.png" ,   label: "10"},
    { id: 11, shape: "image", image: DIR + "redintl.png" ,   label: "11"},
    { id: 12, shape: "image", image: DIR + "yellowheadline.png" ,   label: "12"},
    { id: 13, shape: "image", image: DIR + "redinn.png" ,   label: "13"},
    { id: 14, shape: "image", image: DIR + "secret.png" ,   label: "14"},
    {
      id: 15,
      shape: "image",
      image: DIR + "redintl.png",
      Image: DIR + "redintl.png",
      label: ""
    },
    {
      id: 16,
      shape: "image",
      image: DIR + "anotherMissing.png",
      brokenImage: DIR + "9.png",
      label: ""
    },

    { id: 17, shape: "image", image: DIR + "secret4.png",   label: "17"},
    { id: 18, shape: "image", image: DIR + "study3.png",   label: "18" },
    { id: 19, shape: "image", image: DIR + "secret3.png" ,   label: "19"},
    { id: 20, shape: "image", image: DIR + "secret3.png",   label: "20" },
    { id: 21, shape: "image", image: DIR + "study2.png",   label: "21" },
    { id: 22, shape: "image", image: DIR + "secret3.png",   label: "22" },
    { id: 23, shape: "image", image: DIR + "study3.png",   label: "23" },
    { id: 24, shape: "image", image: DIR + "24.png",   label: "24" },
    { id: 25, shape: "image", image: DIR + "secret4.png",   label: "25" },
    { id: 26, shape: "image", image: DIR + "greenintl.png",   label: "26" },
    { id: 27, shape: "image", image: DIR + "yellowunrest.png",   label: "27" },
    { id: 28, shape: "image", image: DIR + "yellowheadline.png",   label: "28" },
    { id: 29, shape: "image", image: DIR + "yellowstudy.png",   label: "29" },
    { id: 30, shape: "image", image: DIR + "orangeinn.png",   label: "30" },
    { id: 31, shape: "image", image: DIR + "orangestudy.png",   label: "31" },
    { id: 32, shape: "image", image: DIR + "unrest2.png",   label: "32" },
    { id: 33, shape: "image", image: DIR + "redinn.png",   label: "33" },
    { id: 34, shape: "image", image: DIR + "redintl.png",   label: "34" },
    { id: 35, shape: "image", image: DIR + "secret.png",   label: "35" },
    { id: 36, shape: "image", image: DIR + "36.png",   label: "36" },
    { id: 37, shape: "image", image: DIR + "secret2.png",   label: "37" },
    { id: 38, shape: "image", image: DIR + "study2.png",   label: "38" },
    { id: 39, shape: "image", image: DIR + "39.png",   label: "39" },
    { id: 40, shape: "image", image: DIR + "secret4.png",   label: "40" },
    { id: 41, shape: "image", image: DIR + "41.png",   label: "41" },
    { id: 42, shape: "image", image: DIR + "study3.png",   label: "42" },
    { id: 43, shape: "image", image: DIR + "study2.png" ,   label: "43"},
    { id: 44, shape: "image", image: DIR + "redstudy.png",   label: "44" },
    { id: 45, shape: "image", image: DIR + "redstudy.png",   label: "45" },
    { id: 46, shape: "image", image: DIR + "yellowstudy.png",   label: "46" },
    { id: 47, shape: "image", image: DIR + "greenintl.png",   label: "47" },
    { id: 48, shape: "image", image: DIR + "ig.jpg",   label: "48" },
    { id: 49, shape: "image", image: DIR + "lightasia.png",   label: "49" },
    { id: 50, shape: "image", image: DIR + "lightasia.png" ,   label: "50"},
    { id: 51, shape: "image", image: DIR + "lightasia.png",   label: "51" },
    { id: 52, shape: "image", image: DIR + "yellowheadline.png",   label: "52" },
    { id: 53, shape: "image", image: DIR + "orangeinn.png",   label: "53" },
    { id: 54, shape: "image", image: DIR + "study2.png",   label: "54" },
    { id: 55, shape: "image", image: DIR + "study3.png",   label: "55" },
    { id: 56, shape: "image", image: DIR + "30.png",   label: "56" },
    { id: 57, shape: "image", image: DIR + "study3.png" ,   label: "57"},
    { id: 58, shape: "image", image: DIR + "secret3.png",   label: "58" },
    { id: 59, shape: "image", image: DIR + "30.png",   label: "59" },
    { id: 60, shape: "image", image: DIR + "study2.png" ,   label: "60"},
    { id: 61, shape: "image", image: DIR + "secret.png" ,   label: "61"},
    { id: 62, shape: "image", image: DIR + "redstudy.png",   label: "62" },

    { id: 63, shape: "image", image: DIR + "lightla.png",   label: "63" },
    { id: 64, shape: "image", image: DIR + "greenintl.png",   label: "64" },
    { id: 65, shape: "image", image: DIR + "orangeinn.png",   label: "65" },
    { id: 66, shape: "image", image: DIR + "redinn.png",   label: "66" },
    { id: 67, shape: "image", image: DIR + "orangeinn.png",   label: "67" },
    { id: 68, shape: "image", image: DIR + "secret3.png",   label: "68" },
    { id: 69, shape: "image", image: DIR + "unrest2.png",   label: "69" },
    { id: 70, shape: "image", image: DIR + "secret4.png",   label: "70" },
    { id: 71, shape: "image", image: DIR + "secret.png",   label: "71" },
    { id: 72, shape: "image", image: DIR + "35.png",   label: "72" },
    { id: 73, shape: "image", image: DIR + "secret4.png",   label: "73" },
    { id: 74, shape: "image", image: DIR + "37.png",   label: "74" },
    { id: 75, shape: "image", image: DIR + "study3.png",   label: "75" },
    { id: 76, shape: "image", image: DIR + "39.png",   label: "76" },
    { id: 77, shape: "image", image: DIR + "redintl.png",   label: "77" },
    { id: 78, shape: "image", image: DIR + "darkblueyou.jpg",   label: "78" },
    { id: 79, shape: "image", image: DIR + "lightasia.png",   label: "79" },
    { id: 80, shape: "image", image: DIR + "yellowloc.png" ,   label: "80"},
    { id: 81, shape: "image", image: DIR + "greenintl.png",   label: "81" },
    { id: 82, shape: "image", image: DIR + "darkblueyou.jpg",   label: "82" },
    { id: 83, shape: "image", image: DIR + "newsblue.png",   label: "83" },
    { id: 84, shape: "image", image: DIR + "greenstudy.png",   label: "84" },
    { id: 85, shape: "image", image: DIR + "snap.png",   label: "85" },
    { id: 86, shape: "image", image: DIR + "email.jpg",   label: "86" },
    { id: 87, shape: "image", image: DIR + "lightasia.png" ,   label: "87"},
    { id: 88, shape: "image", image: DIR + "greenintl.png",   label: "88" },
    { id: 89, shape: "image", image: DIR + "yellowstudy.png",   label: "89" },
    { id: 90, shape: "image", image: DIR + "yellowloc.png",   label: "90" },
    { id: 91, shape: "image", image: DIR + "greenminor.png",   label: "91" },
    { id: 92, shape: "image", image: DIR + "orangeinn.png",   label: "92" },
    { id: 93, shape: "image", image: DIR + "orangestudy.png",   label: "93" },
    { id: 94, shape: "image", image: DIR + "yellowunrest.png" ,   label: "94"},
    { id: 95, shape: "image", image: DIR + "redinn.png",   label: "95" },
    { id: 96, shape: "image", image: DIR + "30.png",   label: "96" },
    { id: 97, shape: "image", image: DIR + "redstudy.png" ,   label: "97"},
    { id: 98, shape: "image", image: DIR + "unrest.png" ,   label: "98"},
    { id: 99, shape: "image", image: DIR + "secret4.png",   label: "99" },
    { id: 100, shape: "image", image: DIR + "https://github.com/laurenharpole/visabilities/blob/master/darkblueyou.jpg",   label: "100" },
    { id: 101, shape: "image", image: DIR + "secret4.png",   label: "101" },
    { id: 102, shape: "image", image: DIR + "30.png",   label: "102" },
    { id: 103, shape: "image", image: DIR + "30.png",   label: "103" },
    { id: 104, shape: "image", image: DIR + "secret4.png",   label: "104" },
    { id: 105, shape: "image", image: DIR + "orangeinn.png",   label: "105" },
    { id: 106, shape: "image", image: DIR + "yellowloc.png",   label: "106" },
    { id: 107, shape: "image", image: DIR + "secret4.png",   label: "107" },
    { id: 108, shape: "image", image: DIR + "unrest.png",   label: "108" },





  ];


  // create connections between people
  // value corresponds with the amount of contact between two people
  edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 1, to: 9 },
    { from: 1, to: 10 },
    { from: 2, to: 10 },
    { from: 2, to: 11 },
    { from: 2, to: 15 },
    { from: 2, to: 14 },
    { from: 2, to: 13 },
    { from: 2, to: 12 },
    { from: 2, to: 3 },
    { from: 3, to: 2 },
    { from: 3, to: 15 },
    { from: 3, to: 14 },
    { from: 3, to: 13 },
    { from: 3, to: 12 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 5 },
    { from: 4, to: 6 },
    { from: 4, to: 7 },
    { from: 4, to: 3 },
    { from: 4, to: 26 },
    { from: 5, to: 9 },
    { from: 5, to: 8 },
    { from: 5, to: 7 },
    { from: 5, to: 6 },
    { from: 5, to: 4 },
    { from: 5, to: 3 },
    { from: 6, to: 27 },
    { from: 6, to: 27 },
    { from: 6, to: 26 },
    { from: 6, to: 4 },
    { from: 6, to: 5 },
    { from: 6, to: 7 },
    { from: 7, to: 47 },
    { from: 7, to: 6 },
    { from: 7, to: 4 },
    { from: 7, to: 5 },
    { from: 7, to: 8 },
    { from: 8, to: 7 },
    { from: 8, to: 9 },
    { from: 8, to: 4 },
    { from: 8, to: 5 },
    { from: 8, to: 47 },
    { from: 9, to: 5 },
    { from: 9, to: 48 },
    { from: 9, to: 47 },
    { from: 9, to: 8 },
    { from: 10, to: 2 },
    { from: 10, to: 11 },
    { from: 10, to: 51 },
    { from: 10, to: 62 },
    { from: 11, to: 10 },
    { from: 11, to: 2 },
    { from: 11, to: 15 },
    { from: 11, to: 20 },
    { from: 11, to: 21 },
    { from: 11, to: 51 },
    { from: 11, to: 62 },
    { from: 12, to: 3 },
    { from: 12, to: 13 },
    { from: 12, to: 14 },
    { from: 12, to: 16 },
    { from: 12, to: 2 },
    { from: 13, to: 3 },
    { from: 13, to: 2 },
    { from: 13, to: 14 },
    { from: 13, to: 16 },
    { from: 13, to: 12 },
    { from: 14, to: 13 },
    { from: 14, to: 15 },
    { from: 14, to: 16 },
    { from: 14, to: 12 },
    { from: 14, to: 3 },
    { from: 14, to: 2 },
    { from: 14, to: 19 },
    { from: 14, to: 17 },
    { from: 15, to: 14 },
    { from: 15, to: 19 },
    { from: 15, to: 20 },
    { from: 15, to: 11 },
    { from: 15, to: 2 },
    { from: 15, to: 20 },
    { from: 15, to: 3 },
    { from: 15, to: 17 },
    { from: 15, to: 18 },
    { from: 16, to: 12 },
    { from: 16, to: 13 },
    { from: 16, to: 14 },

    { from: 16, to: 17 },
    { from: 17, to: 16 },
    { from: 17, to: 14 },
    { from: 17, to: 15 },
    { from: 17, to: 19 },
    { from: 17, to: 18 },
    { from: 18, to: 15 },
    { from: 18, to: 17 },
    { from: 18, to: 19 },
    { from: 18, to: 22 },
    { from: 18, to: 23},
    { from: 19, to: 15 },
    { from: 19, to: 17 },
    { from: 19, to: 18 },
    { from: 19, to: 20 },
    { from: 19, to: 21 },
    { from: 19, to: 22 },
    { from: 19, to: 23 },
    { from: 20, to: 15 },
    { from: 20, to: 11 },
    { from: 20, to: 21 },
    { from: 20, to:25 },
    { from: 20, to: 24 },
    { from: 20, to: 22 },
    { from: 20, to: 23 },
    { from: 20, to: 19 },
    { from: 21, to: 11 },
    { from: 21, to: 20 },
    { from: 21, to: 15 },
    { from: 21, to: 19 },
    { from: 21, to: 22 },
    { from: 21, to: 25 },
    { from: 21, to: 54 },
    { from: 22, to: 20 },
    { from: 22, to: 21 },
    { from: 22, to: 25 },
    { from: 22, to: 24 },
    { from: 22, to: 23 },
    { from: 22, to: 19 },
    { from: 22, to: 18 },
    { from: 22, to: 15 },
    { from: 23, to: 19 },
    { from: 23, to: 18 },
    { from: 23, to: 24 },
    { from: 23, to:22 },
    { from: 23, to: 25 },
    { from: 23, to:20 },
    { from: 23, to: 15 },
    { from: 24, to: 23 },
    { from: 24, to: 22 },
    { from: 24, to: 20 },
    { from: 24, to: 21 },
    { from: 24, to: 25 },
    { from: 24, to: 54 },
    { from: 24, to: 58 },
    { from: 24, to: 55 },
    { from: 24, to: 56 },
    { from: 25, to: 21 },
    { from: 25, to: 20 },
    { from: 25, to: 22 },
    { from: 25, to: 23 },
    { from: 25, to: 24 },
    { from: 25, to: 55 },
    { from: 25, to: 54 },
    { from: 25, to: 58 },
    { from: 26, to: 4 },
    { from: 26, to: 6 },
    { from: 26, to: 7 },
    { from: 26, to: 27 },
    { from: 26, to: 33 },
    { from: 26, to: 28 },
    { from: 26, to: 30 },
    { from: 26, to: 29 },
    { from: 27, to: 6 },
    { from: 27, to: 7 },
    { from: 27, to: 45 },
    { from: 27, to: 34 },
    { from: 27, to: 37 },
    { from: 27, to: 33 },
    { from: 27, to: 35 },
    { from: 27, to: 32 },
    { from: 27, to: 30 },
    { from: 27, to: 28 },
    { from: 27, to: 26 },
    { from: 28, to: 26 },
    { from: 28, to: 29 },
    { from: 28, to: 30 },
    { from: 28, to:31 },
    { from: 28, to: 32 },
    { from: 28, to: 35 },
    { from: 28, to:33 },
    { from: 28, to: 27 },
    { from: 29, to: 26 },
    { from: 29, to: 28 },
    { from: 29, to: 30 },
    { from: 29, to: 32 },
    { from: 29, to: 35 },
    { from: 29, to: 31 },
    { from: 30, to: 29 },
    { from: 30, to: 31 },
    { from: 30, to: 32 },
    { from: 30, to: 35 },
    { from: 30, to: 33 },
    { from: 30, to: 34},
    { from: 30, to: 27 },
    { from: 30, to: 28 },
    { from: 30, to: 26 },
    { from: 31, to: 36 },
    { from: 31, to: 35 },
    { from: 31, to: 32 },
    { from: 31, to: 34 },
    { from: 31, to: 33 },
    { from: 31, to: 27 },
    { from: 31, to: 28 },
    { from: 31, to: 30 },
    { from: 31, to: 29 },
    { from: 32, to: 31 },
    { from: 32, to: 29 },
    { from: 32, to: 30 },
    { from: 32, to: 27 },
    { from: 32, to: 33 },
    { from: 32, to: 35 },
    { from: 32, to: 34 },
    { from: 32, to: 28 },
    { from: 32, to: 31 },
    { from: 32, to: 37 },
    { from: 33, to: 27 },
    { from: 33, to: 34 },
    { from: 33, to: 37 },
    { from: 33, to:38 },
    { from: 33, to: 36},
    { from: 33, to: 35 },
    { from: 33, to: 32 },
    { from: 33, to: 30 },
    { from: 33, to: 28 },
    { from: 33, to: 26 },

    { from: 34, to: 42},
    { from: 34, to: 41 },
    { from: 34, to: 37 },
    { from: 34, to: 38 },
    { from: 34, to: 36 },
    { from: 34, to: 33 },
    { from: 34, to: 35 },
    { from: 34, to: 32 },
    { from: 34, to: 27 },

    { from: 35, to: 36},
    { from: 35, to: 31 },
    { from: 35, to: 32 },
    { from: 35, to: 30 },
    { from: 35, to: 28 },
    { from: 35, to: 33 },
    { from: 35, to: 27 },
    { from: 35, to: 34 },
    { from: 35, to: 37 },

    { from: 36, to: 38 },
    { from: 36, to: 37 },
    { from: 36, to: 34 },
    { from: 36, to: 33 },
    { from: 36, to: 35 },
    { from: 36, to: 32 },
    { from: 36, to: 31 },

    { from: 37, to: 42 },
    { from: 37, to: 41 },
    { from: 37, to: 40 },
    { from: 37, to: 38 },
    { from: 37, to: 36 },
    { from: 37, to: 35 },
    { from: 37, to: 33 },
    { from: 37, to: 34 },

    { from: 38, to: 42 },
    { from: 38, to: 41 },
    { from: 38, to: 40 },
    { from: 38, to: 39 },
    { from: 38, to: 36 },
    { from: 38, to: 35 },
    { from: 38, to: 33 },
    { from: 38, to: 34 },
    { from: 38, to: 32 },
    { from: 39, to: 40 },
    { from: 39, to: 39 },
    { from: 39, to: 41 },
    { from: 40, to: 38 },
    { from: 40, to: 37 },
    { from: 40, to: 39 },
    { from: 40, to: 41 },
    { from: 41, to: 38 },
    { from: 41, to: 37 },
    { from: 41, to: 39 },
    { from: 41, to: 40 },
    { from: 41, to: 42 },
    { from: 41, to: 34 },

    { from: 42, to: 43 },
    { from: 42, to: 41 },
    { from: 42, to: 38 },
    { from: 42, to: 37 },
    { from: 42, to: 34 },
    { from: 43, to: 42 },
    { from: 43, to: 45 },

    { from: 44, to: 43 },
    { from: 44, to: 45 },
    { from: 44, to: 46 },
    { from: 44, to: 65 },
    { from: 44, to: 105 },
    { from: 44, to: 106 },



    { from: 107, to: 105 },
    { from: 107, to: 108 },
    { from: 107, to: 69 },
    { from: 107, to: 74 },
    { from: 107, to: 75 },
    { from: 107, to: 43 },


    { from: 108, to: 65 },
    { from: 108, to: 66 },
    { from: 108, to: 105 },
    { from: 108, to: 106},
    { from: 108, to: 107 },
    { from: 108, to: 74 },
    { from: 108, to: 43 },


    { from: 45, to: 43 },
    { from: 45, to: 44 },
    { from: 45, to: 46 },
    { from: 45, to: 27 },

    { from: 46, to: 45 },
    { from: 46, to: 44 },
    { from: 46, to: 50 },
    { from: 46, to: 49 },
    { from: 46, to: 47 },

    { from: 47, to: 50 },
    { from: 47, to: 46 },
    { from: 47, to: 49 },
    { from: 47, to: 48 },

    { from: 48, to: 50 },
    { from: 48, to: 9 },
    { from: 48, to: 49 },
    { from: 48, to: 47 },

    { from: 49, to: 50 },
    { from: 49, to: 48 },
    { from: 49, to: 47 },

    { from: 50, to: 46 },
    { from: 50, to: 47},
    { from: 50, to: 48 },
    { from: 50, to: 49 },

    { from: 51, to: 10 },
    { from: 51, to: 11},
    { from: 51, to: 52 },
    { from: 51, to: 53 },

    { from: 52, to: 10 },
    { from: 52, to: 11},
    { from: 52, to: 51 },
    { from: 52, to: 53 },
    { from: 52, to: 62 },

    { from: 53, to: 52 },
    { from: 53, to: 54},
    { from: 53, to: 58 },
    { from: 53, to: 62 },

    { from: 54, to: 24 },
    { from: 54, to: 54 },
    { from: 54, to: 25},
    { from: 54, to: 58 },
    { from: 54, to: 53 },
    { from: 54, to: 62 },

    { from: 55, to: 24 },
    { from: 55, to: 54 },
    { from: 55, to: 25},
    { from: 55, to: 58 },
    { from: 55, to: 59 },

    { from: 56, to: 24 },
    { from: 56, to: 55 },
    { from: 56, to: 57},

    { from: 57, to: 56 },

    { from: 58, to: 55 },
    { from: 58, to: 59 },
    { from: 58, to: 60 },
    { from: 58, to: 61 },
    { from: 58, to: 62 },
    { from: 58, to: 54 },
    { from: 58, to: 24 },

    { from: 59, to: 55 },
    { from: 59, to: 58 },
    { from: 59, to: 60 },


    { from: 60, to: 61 },
    { from: 60, to: 62 },
    { from: 60, to: 58 },
    { from: 60, to: 59 },

    { from: 61, to: 60 },
    { from: 61, to: 62 },
    { from: 61, to: 58 },
    { from: 61, to: 54 },

    { from: 62, to: 60 },
    { from: 62, to: 61 },
    { from: 62, to: 58 },
    { from: 62, to: 54 },
    { from: 62, to: 53 },










    { from: 2, to: 15 },
    { from: 2, to: 14 },
    { from: 2, to: 11 },
    { from: 2, to: 13 },
    { from: 2, to: 12 },
    { from: 2, to: 3 },
    { from: 3, to: 15 },
    { from: 3, to: 14 },
    { from: 3, to: 13 },
    { from: 3, to: 12 },
    { from: 11, to: 10 },
    { from: 11, to: 15 },
    { from: 11, to: 20 },
    { from: 11, to: 21 },
    { from: 11, to: 51 },
    { from: 11, to: 52 },
    { from: 10, to: 51 },
    { from: 10, to: 52 },
    { from: 23, to: 24 },
    { from: 23, to: 22 },
    { from: 23, to: 19 },
    { from: 23, to: 20 },
    { from: 23, to: 18 },
    { from: 25, to: 21 },
    { from: 25, to: 24 },
    { from: 25, to: 55 },
    { from: 25, to: 20 },
    { from: 25, to: 22 },
    { from: 25, to: 23 },
    { from: 52, to: 53 },
    { from: 53, to: 54 },
    { from: 53, to: 62 },
    { from: 54, to: 55 },
    { from: 54, to: 58 },
    { from: 54, to: 24 },
    { from: 54, to: 25 },
    { from: 62, to: 61 },
    { from: 62, to: 58 },
    { from: 62, to: 54 },
    { from: 62, to: 59 },
    { from: 61, to: 60 },
    { from: 61, to: 58 },
    { from: 60, to: 58 },

    { from: 63, to: 48 },
    { from: 63, to: 49 },
    { from: 63, to: 50 },
    { from: 63, to: 65 },
    { from: 63, to: 64 },

    { from: 64, to: 63 },
    { from: 64, to: 65 },


    { from: 65, to: 63 },
    { from: 65, to: 64 },
    { from: 65, to: 50 },
    { from: 65, to: 44 },
    { from: 65, to: 66 },
    { from: 65, to: 67 },

    { from: 105, to: 107 },
    { from: 105, to: 108 },
    { from: 105, to: 65 },
    { from: 105, to: 44 },
    { from: 105, to: 67 },
    { from: 105, to: 50 },
    { from: 105, to: 66 },
    { from: 27, to: 47 },
    { from: 42, to: 45 },
    { from: 45, to: 37 },
    { from: 45, to: 34 },
    { from: 75, to: 108 },
    { from: 75, to: 43 },
    { from: 75, to: 42 },
    { from: 84, to: 94 },
    { from: 76, to: 74 },
    { from: 76, to: 73 },
    { from: 3, to: 9 },
    { from: 82, to: 48 },
    { from: 82, to: 63 },
    { from: 85, to: 63 },
    { from: 64, to: 77 },
{ from: 42, to: 76 },
{ from: 78, to: 85 },
{ from: 48, to: 1 },
{ from: 48, to: 51 },
{ from: 51, to: 1 },
{ from: 57, to: 24 },

{ from: 68, to: 73 },{ from: 68, to: 72 },{ from: 67, to: 78 },
    { from: 106, to: 108 },
    { from: 106, to: 65 },
    { from: 106, to: 63 },
    { from: 106, to: 44 },
    { from: 106, to: 67 },
    { from: 106, to: 50 },
    { from: 106, to: 66 },

    { from: 66, to: 44 },
    { from: 66, to: 65 },
    { from: 66, to: 67 },
    { from: 66, to: 68 },
    { from: 66, to: 70 },
    { from: 66, to: 69 },
    { from: 66, to: 74 },

    { from: 67, to: 66 },
    { from: 67, to: 65 },
    { from: 67, to: 68 },
    { from: 67, to: 71 },

    { from: 68, to: 67 },
    { from: 68, to: 71 },
    { from: 68, to: 70 },
    { from: 68, to: 69 },
    { from: 68, to: 66 },

    { from: 69, to: 67 },
    { from: 69, to: 74 },
    { from: 69, to: 70 },
    { from: 69, to: 68 },
    { from: 69, to: 66 },
    { from: 69, to: 44 },

    { from: 70, to: 69 },
    { from: 70, to: 73 },
    { from: 70, to: 71 },
    { from: 70, to: 68 },
    { from: 70, to: 66 },
    { from: 70, to: 72 },

    { from: 71, to: 67 },
    { from: 71, to: 70 },
    { from: 71, to: 72 },
    { from: 71, to: 68 },

    { from: 72, to: 71 },
    { from: 72, to: 70 },
    { from: 72, to: 73 },

    { from: 73, to: 74 },
    { from: 73, to: 69 },
    { from: 73, to: 70 },
    { from: 73, to: 72 },


    { from: 74, to: 73 },
    { from: 74, to: 69 },
    { from: 74, to: 44 },
    { from: 74, to: 75 },
    { from: 74, to: 66 },

    { from: 75, to: 76 },
    { from: 75, to: 44 },

    { from: 77, to: 65 },

    { from: 78, to: 64 },
    { from: 78, to: 63 },

    { from: 79, to: 51 },
    { from: 79, to: 80 },
    { from: 79, to: 81 },
    { from: 79, to: 85 },
    { from: 79, to: 84 },
    { from: 79, to: 82 },
    { from: 79, to: 83 },

    { from: 80, to: 51 },
    { from: 80, to: 79 },
    { from: 80, to: 81 },
    { from: 80, to: 52 },
    { from: 80, to: 53 },

    { from: 81, to: 51 },
    { from: 81, to: 79 },
    { from: 81, to: 80 },
    { from: 81, to: 52 },
    { from: 81, to: 85 },
    { from: 81, to: 82 },
    { from: 81, to: 83 },
    { from: 81, to: 84},
    { from: 81, to: 87 },
    { from: 81, to: 88 },

    { from: 82, to: 51 },
    { from: 82, to: 85 },
    { from: 82, to: 81 },
    { from: 82, to: 84 },
    { from: 82, to: 83 },

    { from: 83, to: 82 },
    { from: 83, to: 85 },
    { from: 83, to: 81 },
    { from: 83, to: 84 },
    { from: 83, to: 86 },


    { from: 84, to: 83 },
    { from: 84, to: 82 },
    { from: 84, to: 79 },
    { from: 84, to: 81 },
    { from: 84, to: 85 },
    { from: 84, to: 86 },

    { from: 85, to: 83 },
    { from: 85, to: 82 },
    { from: 85, to: 79 },
    { from: 85, to: 81 },
    { from: 85, to: 86 },
    { from: 85, to: 87 },
    { from: 85, to: 88 },

    { from: 86, to: 87 },
    { from: 86, to: 85 },
    { from: 86, to: 84 },
    { from: 86, to: 83 },

    { from: 87, to: 86 },
    { from: 87, to: 85 },
    { from: 87, to: 81 },
    { from: 87, to: 88 },
    { from: 87, to: 89 },
    { from: 87, to: 91 },
    { from: 87, to: 90 },
    { from: 87, to: 100 },

    { from: 88, to: 81 },
    { from: 88, to: 89 },
    { from: 88, to: 91 },
    { from: 88, to: 92 },
    { from: 88, to: 90 },
    { from: 88, to: 100 },
    { from: 88, to: 87 },
    { from: 88, to: 86 },
    { from: 88, to: 85},

    { from: 89, to: 93},
    { from: 89, to: 94},
    { from: 89, to: 92},
    { from: 89, to: 91},
    { from: 89, to: 90},
    { from: 89, to: 100},
    { from: 89, to: 87},
    { from: 89, to: 88},

    { from: 90, to: 88},
    { from: 90, to: 89},
    { from: 90, to: 91},
    { from: 90, to: 92},
    { from: 90, to: 94},
    { from: 90, to: 100},
    { from: 90, to: 87},

    { from: 91, to: 92},
    { from: 91, to: 90},
    { from: 91, to: 88},
    { from: 91, to: 89},
    { from: 91, to: 87},

    { from: 92, to: 91},
    { from: 92, to: 94},
    { from: 92, to: 90},
    { from: 92, to: 89},
    { from: 92, to: 88},

    { from: 93, to: 52},
    { from: 93, to:53},
    { from: 93, to: 62},
    { from: 93, to: 61},
    { from: 93, to: 95},
    { from: 93, to: 94},
    { from: 93, to: 92},
    { from: 93, to: 91},
    { from: 93, to: 89},
    { from: 93, to: 88},

    { from: 94, to: 92},
    { from: 94, to:91},
    { from: 94, to: 89},
    { from: 94, to: 93},
    { from: 94, to: 95},
    { from: 94, to: 97},


    { from: 95, to: 96},
    { from: 95, to: 62},
    { from: 95, to: 61},
    { from: 95, to: 97},
    { from: 95, to: 89},
    { from: 95, to: 93},
    { from: 95, to: 94},

    { from: 96, to: 61},
    { from: 96, to: 62},
    { from: 96, to: 60},
    { from: 96, to: 98},
    { from: 96, to: 97},
    { from: 96, to: 95},

    { from: 98, to: 60},
    { from: 98, to: 61},
    { from: 98, to: 96},
    { from: 98, to: 97},
    { from: 98, to: 102},

    { from: 101, to: 60},
    { from: 101, to: 61},
    { from: 101, to: 96},
    { from: 101, to: 102},
    { from: 101, to: 103},
    { from: 101, to: 104},
    { from: 101, to: 97},
    { from: 101, to: 59},

    { from: 102, to: 60},
    { from: 102, to: 61},
    { from: 102, to: 96},
    { from: 102, to: 101},
    { from: 102, to: 103},
    { from: 102, to: 104},
    { from: 102, to: 97},

    { from: 103, to: 60},
    { from: 103, to: 61},
    { from: 103, to: 96},
    { from: 103, to: 102},
    { from: 103, to: 101},
    { from: 103, to: 104},
    { from: 103, to: 97},

    { from: 104, to: 60},
    { from: 104, to: 61},
    { from: 104, to: 96},
    { from: 104, to: 102},
    { from: 104, to: 103},
    { from: 104, to: 101},
    { from: 104, to: 97},
    { from: 104, to: 99},


    { from: 99, to: 98},
    { from: 99, to: 97},

    { from: 100, to: 87},
    { from: 100, to: 88},
    { from: 100, to: 89},
    { from: 100, to: 92},
    { from: 100, to: 90},





















  ];



  // create a network
  var container = document.getElementById("mynetwork");

  var data = {
    nodes: nodes,
    edges: edges

  };
  var options = {
    layout:{
      randomSeed: 1,

      },
improvedLayout: true,


    nodes: {
      borderWidth: 0,

      useImageSize: true,
      shape: 'image',
      fixed: true,
      nodeSpacing: 950,
      padding: 200,



      color: {
        border: 500,
        level: 60,

        background: "#121212",
      },
      font: { color: "rgb(0,0,0,0 )" },
      shapeProperties: {
        useBorderWithImage: true,
         shape: 'image',
      }
    },

    edges: {
      enabled: false,
      color: "darkgray",
      scaleFactor: 2,
      length: 200,
      min: 4,
      max: 26,
      physics: true,

    }


  };


  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
