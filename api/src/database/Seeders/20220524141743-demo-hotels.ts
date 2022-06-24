'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('hotels', [
      {
        name: 'Hoeger, Herzog and Wiegand',
        address: '94 Southridge Circle',
        phone: '9743774327',
      },
      {
        name: 'Huel-Pfannerstill',
        address: '14041 Sugar Way',
        phone: '8414216894',
      },
      {
        name: 'Gerhold and Sons',
        address: '979 Dovetail Terrace',
        phone: '4924477676',
      },
      {
        name: 'Breitenberg LLC',
        address: '27034 Ryan Center',
        phone: '4017168492',
      },
      {
        name: 'Graham Group',
        address: '4211 Cambridge Place',
        phone: '7389879478',
      },
      {
        name: 'Bailey, Collier and Turner',
        address: '92 Bunker Hill Junction',
        phone: '7947996517',
      },
      {
        name: 'Homenick Group',
        address: '68314 Sugar Hill',
        phone: '9525274267',
      },
      {
        name: 'Legros-Johnson',
        address: '226 Bluestem Drive',
        phone: '2485453313',
      },
      {
        name: 'Anderson, Dach and Wehner',
        address: '45314 Butterfield Alley',
        phone: '5848294016',
      },
      {
        name: 'Kreiger Group',
        address: '63372 Charing Cross Crossing',
        phone: '3319235208',
      },
      {
        name: 'Balistreri-McGlynn',
        address: '452 Wayridge Plaza',
        phone: '3146404904',
      },
      {
        name: 'Bednar-Zulauf',
        address: '89 Nevada Alley',
        phone: '3441831417',
      },
      {
        name: 'Gislason-Friesen',
        address: '338 Cordelia Drive',
        phone: '3217421668',
      },
      { name: 'Green-Huels', address: '57 Porter Place', phone: '6924623732' },
      {
        name: 'Cremin and Sons',
        address: '467 Coleman Alley',
        phone: '3688478896',
      },
      {
        name: 'Muller-Kub',
        address: '24993 Cody Crossing',
        phone: '3548916250',
      },
      {
        name: 'Tremblay, Bechtelar and Kerluke',
        address: '6 Acker Center',
        phone: '9602358288',
      },
      {
        name: 'Runte-Jenkins',
        address: '50788 Trailsway Crossing',
        phone: '5941039444',
      },
      {
        name: 'Littel and Sons',
        address: '40670 Forest Parkway',
        phone: '2533645947',
      },
      {
        name: 'Yundt-Huels',
        address: '038 Moose Terrace',
        phone: '4206979184',
      },
      {
        name: 'Zemlak-Gleason',
        address: '96 Loeprich Way',
        phone: '4924969697',
      },
      {
        name: 'Satterfield, Powlowski and Waters',
        address: '915 Ryan Drive',
        phone: '2786044674',
      },
      {
        name: 'Cruickshank, Schaden and Kemmer',
        address: '489 Algoma Terrace',
        phone: '9954206349',
      },
      {
        name: 'Hahn, Lowe and Haag',
        address: '43 Warbler Point',
        phone: '1261452390',
      },
      {
        name: 'Grady LLC',
        address: '4951 Talmadge Court',
        phone: '9206655268',
      },
      {
        name: 'Champlin LLC',
        address: '2085 Westridge Drive',
        phone: '5975726854',
      },
      {
        name: 'Gleichner-Cronin',
        address: '13 Dunning Alley',
        phone: '6415709928',
      },
      {
        name: 'Greenfelder-Predovic',
        address: '4 Becker Trail',
        phone: '5136335775',
      },
      {
        name: "Mosciski, O'Conner and Johnson",
        address: '302 Arizona Road',
        phone: '4765360393',
      },
      {
        name: 'Howe Group',
        address: '73258 Annamark Drive',
        phone: '5375201203',
      },
      {
        name: 'Botsford, McClure and Gerlach',
        address: '8358 American Center',
        phone: '1922549179',
      },
      {
        name: 'McCullough Group',
        address: '4 Sullivan Junction',
        phone: '5999639977',
      },
      {
        name: 'Dibbert and Sons',
        address: '20 Moose Drive',
        phone: '9769841430',
      },
      {
        name: 'Larson-Feeney',
        address: '84321 Caliangt Court',
        phone: '3735728394',
      },
      {
        name: 'Mills and Sons',
        address: '1 School Center',
        phone: '7896015893',
      },
      {
        name: 'Dickens, Mann and Fahey',
        address: '7444 Division Alley',
        phone: '7793539168',
      },
      { name: 'Fritsch Inc', address: '5 Fuller Road', phone: '9889168095' },
      { name: 'Krajcik-Auer', address: '39 Hagan Court', phone: '7689639918' },
      {
        name: 'Gutmann and Sons',
        address: '53 Daystar Lane',
        phone: '8148066794',
      },
      {
        name: 'Block and Sons',
        address: '9408 Corscot Parkway',
        phone: '8485339592',
      },
      {
        name: 'Stracke, Stehr and Metz',
        address: '5 Hayes Point',
        phone: '9465589426',
      },
      {
        name: 'Klocko-Satterfield',
        address: '6 Mandrake Park',
        phone: '7424832658',
      },
      {
        name: 'Bechtelar, Murazik and Lindgren',
        address: '920 Lawn Pass',
        phone: '4051537295',
      },
      {
        name: 'Considine-Kuhlman',
        address: '9044 Carberry Court',
        phone: '9402215810',
      },
      {
        name: 'Schmeler LLC',
        address: '55 Hallows Place',
        phone: '3805450162',
      },
      {
        name: 'Macejkovic-Rogahn',
        address: '86517 4th Road',
        phone: '3526393822',
      },
      {
        name: 'Rogahn-Watsica',
        address: '174 Straubel Court',
        phone: '1528942982',
      },
      {
        name: 'Kunze, Cruickshank and Hayes',
        address: '06 Cody Center',
        phone: '4278064077',
      },
      { name: 'Weber-Kihn', address: '08833 Spohn Trail', phone: '5014035237' },
      {
        name: 'Hagenes Inc',
        address: '898 Beilfuss Street',
        phone: '3252461768',
      },
      {
        name: 'Reichert LLC',
        address: '82144 Carioca Parkway',
        phone: '1025034008',
      },
      {
        name: 'Greenholt, Lindgren and Schmitt',
        address: '973 Weeping Birch Pass',
        phone: '5045259623',
      },
      { name: 'Herman LLC', address: '3001 Farmco Plaza', phone: '9278418648' },
      {
        name: 'Swift-Barton',
        address: '76948 Caliangt Place',
        phone: '9961376036',
      },
      {
        name: 'Bechtelar, Veum and Grady',
        address: '543 Saint Paul Plaza',
        phone: '2595056237',
      },
      { name: 'Quigley-Wolff', address: '1 Merrick Road', phone: '9507958673' },
      {
        name: 'Spinka-Goldner',
        address: '2176 Talmadge Street',
        phone: '3587939223',
      },
      {
        name: 'Grant and Sons',
        address: '8665 Northfield Circle',
        phone: '3512280229',
      },
      { name: 'Zulauf Inc', address: '78 Truax Drive', phone: '4287916683' },
      {
        name: 'Goodwin Inc',
        address: '4413 Toban Junction',
        phone: '1011848576',
      },
      {
        name: 'Stiedemann-Ryan',
        address: '545 Elmside Plaza',
        phone: '7942867689',
      },
      {
        name: 'Blanda Group',
        address: '134 Weeping Birch Lane',
        phone: '2048445416',
      },
      {
        name: 'Bauch, Larkin and Ziemann',
        address: '80 East Plaza',
        phone: '1122147151',
      },
      {
        name: 'Deckow, Adams and Flatley',
        address: '77281 Magdeline Junction',
        phone: '9984797592',
      },
      {
        name: 'Lockman-Corwin',
        address: '48 Arrowood Pass',
        phone: '6437261139',
      },
      {
        name: 'Gulgowski, Parisian and Morissette',
        address: '888 Myrtle Terrace',
        phone: '8186298204',
      },
      {
        name: 'Durgan-Sauer',
        address: '77549 Del Mar Alley',
        phone: '6887591802',
      },
      { name: 'Green Group', address: '7 Nova Hill', phone: '2455703541' },
      {
        name: 'Hartmann and Sons',
        address: '3 Del Sol Circle',
        phone: '9901828944',
      },
      {
        name: 'Schoen, Lesch and Miller',
        address: '0 Harper Court',
        phone: '8507496317',
      },
      {
        name: 'Hoeger, Bernier and Jacobson',
        address: '4 Shopko Court',
        phone: '9259578067',
      },
      {
        name: 'Schulist Group',
        address: '0 Redwing Road',
        phone: '5143274673',
      },
      { name: 'Schimmel LLC', address: '205 8th Trail', phone: '3493659581' },
      {
        name: 'Thompson, Yundt and Sawayn',
        address: '003 Vera Plaza',
        phone: '2054414115',
      },
      {
        name: 'Stokes-Cruickshank',
        address: '236 Quincy Drive',
        phone: '9943956907',
      },
      {
        name: "Jacobs-O'Keefe",
        address: '25297 Bellgrove Drive',
        phone: '3046403578',
      },
      {
        name: 'Murray, Abernathy and Daugherty',
        address: '1378 Manitowish Way',
        phone: '5719005501',
      },
      {
        name: 'Volkman, Torp and Konopelski',
        address: '8388 Gina Alley',
        phone: '5513864445',
      },
      {
        name: 'Morar-Reynolds',
        address: '75 Pond Crossing',
        phone: '2712938240',
      },
      {
        name: 'McCullough and Sons',
        address: '7665 Vahlen Center',
        phone: '6501605416',
      },
      {
        name: 'Labadie Inc',
        address: '45862 Sutherland Point',
        phone: '5055565817',
      },
      {
        name: 'Ferry, Auer and Yost',
        address: '57 Lindbergh Terrace',
        phone: '5174803551',
      },
      { name: 'Trantow Inc', address: '0 Morning Drive', phone: '2216118636' },
      {
        name: 'Hauck-Langworth',
        address: '222 Kings Crossing',
        phone: '1919546500',
      },
      { name: 'Funk LLC', address: '22338 Hanson Alley', phone: '5499931106' },
      {
        name: 'Casper-Konopelski',
        address: '2459 School Alley',
        phone: '4268782505',
      },
      {
        name: 'Johnston, Schowalter and Jakubowski',
        address: '883 Sage Street',
        phone: '2328701852',
      },
      { name: 'Schneider-Schoen', address: '4 Rusk Way', phone: '7631190754' },
      {
        name: "Dach, O'Connell and O'Reilly",
        address: '3927 Hazelcrest Plaza',
        phone: '4281307983',
      },
      {
        name: 'Carroll-Hackett',
        address: '8 Bartelt Avenue',
        phone: '1103736301',
      },
      {
        name: 'Tillman and Sons',
        address: '81131 Mifflin Crossing',
        phone: '6462619191',
      },
      {
        name: 'Hessel, Fahey and Ruecker',
        address: '1864 Mayer Avenue',
        phone: '8192468470',
      },
      {
        name: 'Cormier-Grady',
        address: '5 Charing Cross Lane',
        phone: '4158911840',
      },
      {
        name: 'Marquardt, Kilback and Pfannerstill',
        address: '41 Sheridan Parkway',
        phone: '5073257601',
      },
      {
        name: 'Ritchie-Orn',
        address: '4288 Cambridge Lane',
        phone: '5375963224',
      },
      {
        name: 'Mante, McClure and Marquardt',
        address: '7426 Corben Drive',
        phone: '4183506985',
      },
      {
        name: 'Harvey and Sons',
        address: '6564 Tony Trail',
        phone: '9864233397',
      },
      {
        name: 'Kling-Wolff',
        address: '4941 Mockingbird Parkway',
        phone: '8981627771',
      },
      {
        name: 'Hermiston-Cassin',
        address: '45069 Meadow Vale Drive',
        phone: '4021738599',
      },
      {
        name: 'Boehm, Moen and Flatley',
        address: '0 Caliangt Avenue',
        phone: '9905961591',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('hotels', null, {});
  },
};
