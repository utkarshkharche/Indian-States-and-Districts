var state_arr = new Array(
    "Andaman & Nicobar",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra & Nagar Haveli",
    "Daman & Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Orissa",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  );

  var state_array = new Array();
  state_array[0] = "";
  state_array[1] =
    " Nicobar | North and Middle Andaman | South Andaman ";
  state_array[2] =
    " Anantapur | Chittoor | East Godavari | Guntur | Krishna | Kurnool | Nellore | Prakasam | Srikakulam | Visakhapatnam | Vizianagaram | West Godavari | YSR Kadapa";
  state_array[3] =
    " Tawang | West Kameng | East Kameng | Papum Pare | Kurung Kumey | Kra Daadi | Lower Subansiri | Upper Subansiri | West Siang | East Siang | Siang | Upper Siang | Lower Siang | Lower Dibang Valley | Dibang Valley | Anjaw | Lohit | Namsai | Changlang | Tirap | Longding";
  state_array[4] =
    " Baksa | Barpeta | Biswanath | Bongaigaon | Cachar | Charaideo | Chirang | Darrang | Dhemaji | Dhubri | Dibrugarh | Goalpara | Golaghat | Hailakandi | Hojai | Jorhat | Kamrup Metropolitan | Kamrup | Karbi Anglong | Karimganj | Kokrajhar | Lakhimpur | Majuli | Morigaon | Nagaon | Nalbari | Dima Hasao | Sivasagar | Sonitpur | South Salmara-Mankachar | Tinsukia | Udalguri | West Karbi Anglong";
  state_array[5] =
    " Araria | Arwal | Aurangabad | Banka | Begusarai | Bhagalpur | Bhojpur | Buxar | Darbhanga | East Champaran (Motihari) | Gaya | Gopalganj | Jamui | Jehanabad | Kaimur (Bhabua) | Katihar | Khagaria | Kishanganj | Lakhisarai | Madhepura | Madhubani | Munger (Monghyr) | Muzaffarpur | Nalanda | Nawada | Patna | Purnia (Purnea) | Rohtas | Saharsa | Samastipur | Saran | Sheikhpura | Sheohar | Sitamarhi | Siwan | Supaul | Vaishali | West Champaran";
  state_array[6] = " Chandigarh | Mani Marja";
  state_array[7] =
    " Balod | Baloda Bazar | Balrampur | Bastar | Bemetara | Bijapur | Bilaspur | Dantewada (South Bastar) | Dhamtari | Durg | Gariyaband | Janjgir-Champa | Jashpur | Kabirdham (Kawardha) | Kanker (North Bastar) | Kondagaon | Korba | Korea (Koriya) | Mahasamund | Mungeli | Narayanpur | Raigarh | Raipur | Rajnandgaon | Sukma | Surajpur   | Surguja";
  state_array[8] =
    " Dadra & Nagar Haveli ";
  state_array[9] =
    " Daman | Diu ";
  state_array[10] =
    " Central Delhi | East Delhi | New Delhi | North Delhi | North East  Delhi | North West  Delhi | Shahdara | South Delhi | South East Delhi | South West  Delhi | West Delhi ";
  state_array[11] =
    " North Goa | South Goa ";
  state_array[12] =
    " Ahmedabad | Amreli | Anand | Aravalli | Banaskantha (Palanpur) | Bharuch | Bhavnagar | Botad | Chhota Udepur | Dahod | Dangs (Ahwa) | Devbhoomi Dwarka | Gandhinagar | Gir Somnath | Jamnagar | Junagadh | Kachchh | Kheda (Nadiad) | Mahisagar | Mehsana | Morbi | Narmada (Rajpipla) | Navsari | Panchmahal (Godhra) | Patan | Porbandar | Rajkot | Sabarkantha (Himmatnagar) | Surat | Surendranagar | Tapi (Vyara) | Vadodara | Valsad ";
  state_array[13] =
    " Ambala | Bhiwani | Charkhi Dadri | Faridabad | Fatehabad | Gurgaon | Hisar | Jhajjar | Jind | Kaithal | Karnal | Kurukshetra | Mahendragarh | Mewat | Palwal | Panchkula | Panipat | Rewari | Rohtak | Sirsa | Sonipat | Yamunanagar ";
  state_array[14] =
    " Bilaspur | Chamba | Hamirpur | Kangra | Kinnaur | Kullu | Lahaul &amp; Spiti | Mandi | Shimla | Sirmaur (Sirmour) | Solan | Una ";
  state_array[15] =
    " Anantnag | Bandipore | Baramulla | Budgam | Doda | Ganderbal | Jammu | Kargil | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Poonch | Pulwama | Rajouri | Ramban | Reasi | Samba | Shopian | Srinagar | Udhampur ";
  state_array[16] =
    " Bokaro | Chatra | Deoghar | Dhanbad | Dumka | East Singhbhum | Garhwa | Giridih | Godda | Gumla | Hazaribag | Jamtara | Khunti | Koderma | Latehar | Lohardaga | Pakur | Palamu | Ramgarh | Ranchi | Sahibganj | Seraikela-Kharsawan | Simdega | West Singhbhum ";
  state_array[17] =
    " Bagalkot | Ballari (Bellary) | Belagavi (Belgaum) | Bengaluru (Bangalore) Rural | Bengaluru (Bangalore) Urban | Bidar | Chamarajanagar | Chikballapur | Chikkamagaluru (Chikmagalur) | Chitradurga | Dakshina Kannada | Davangere | Dharwad | Gadag | Hassan | Haveri | Kalaburagi (Gulbarga) | Kodagu | Kolar | Koppal | Mandya | Mysuru (Mysore) | Raichur | Ramanagara | Shivamogga (Shimoga) | Tumakuru (Tumkur) | Udupi | Uttara Kannada (Karwar) | Vijayapura (Bijapur) | Yadgir ";
  state_array[18] =
    " Alappuzha | Ernakulam | Idukki | Kannur | Kasaragod | Kollam | Kottayam | Kozhikode | Malappuram | Palakkad | Pathanamthitta | Thiruvananthapuram | Thrissur | Wayanad ";
  state_array[19] =
    " Agatti | Amini | Androth | Bithra | Chethlath | Kavaratti | Kadmath | Kalpeni | Kilthan | Minicoy ";
  state_array[20] =
    " Agar Malwa | Alirajpur | Anuppur | Ashoknagar | Balaghat | Barwani | Betul | Bhind | Bhopal | Burhanpur | Chhatarpur | Chhindwara | Damoh | Datia | Dewas | Dhar | Dindori | Guna | Gwalior | Harda | Hoshangabad | Indore | Jabalpur | Jhabua | Katni | Khandwa | Khargone | Mandla | Mandsaur | Morena | Narsinghpur | Neemuch | Panna | Raisen | Rajgarh | Ratlam | Rewa | Sagar | Satna | Sehore | Seoni | Shahdol | Shajapur | Sheopur | Shivpuri | Sidhi | Singrauli | Tikamgarh | Ujjain | Umaria | Vidisha ";
  state_array[21] =
    " Ahmednagar | Akola | Amravati | Aurangabad | Beed | Bhandara | Buldhana | Chandrapur | Dhule | Gadchiroli | Gondia | Hingoli | Jalgaon | Jalna | Kolhapur | Latur | Mumbai districts | Mumbai Suburban | Nagpur | Nanded | Nandurbar | Nashik | Osmanabad | Palghar | Parbhani | Pune | Raigad | Ratnagiri | Sangli | Satara | Sindhudurg | Solapur | Thane | Wardha | Washim | Yavatmal ";
  state_array[22] =
    " Bishnupur | Chandel | Churachandpur | Imphal East | Imphal West | Jiribam | Kakching | Kamjong | Kangpokpi | Noney | Pherzawl | Senapati | Tamenglong | Tengnoupal | Thoubal | Ukhrul ";
  state_array[23] =
    " East Garo Hills | East Jaintia Hills | East Khasi Hills | North Garo Hills | Ri Bhoi | South Garo Hills | South West Garo Hills  | South West Khasi Hills | West Garo Hills | West Jaintia Hills | West Khasi Hills ";
  state_array[24] =
    " Aizawl | Champhai | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip ";
  state_array[25] =
    " Dimapur | Kiphire | Kohima | Longleng | Mokokchung | Mon | Peren | Phek | Tuensang | Wokha | Zunheboto ";
  state_array[26] =
    " Angul | Balangir | Balasore | Bargarh | Bhadrak | Boudh | Cuttack | Deogarh | Dhenkanal | Gajapati | Ganjam | Jagatsinghapur | Jajpur | Jharsuguda | Kalahandi | Kandhamal | Kendrapara | Kendujhar (Keonjhar) | Khordha | Koraput | Malkangiri | Mayurbhanj | Nabarangpur | Nayagarh | Nuapada | Puri | Rayagada | Sambalpur | Sonepur | Sundargarh ";
  state_array[27] =
    " Karaikal | Mahe | Pondicherry | Yanam ";
  state_array[28] =
    "Amritsar | Barnala | Bathinda | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Gurdaspur | Hoshiarpur | Jalandhar | Kapurthala | Ludhiana | Mansa | Moga | Muktsar | Nawanshahr (Shahid Bhagat Singh Nagar) | Pathankot | Patiala | Rupnagar | Sahibzada Ajit Singh Nagar (Mohali) | Sangrur | Tarn Taran";
  state_array[29] =
    " Ajmer | Alwar | Banswara | Baran | Barmer | Bharatpur | Bhilwara | Bikaner | Bundi | Chittorgarh | Churu | Dausa | Dholpur | Dungarpur | Hanumangarh | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Karauli | Kota | Nagaur | Pali | Pratapgarh | Rajsamand | Sawai Madhopur | Sikar | Sirohi | Sri Ganganagar | Tonk | Udaipur ";
  state_array[30] =
    " East Sikkim | North Sikkim | South Sikkim | West Sikkim ";
  state_array[31] =
    " Ariyalur | Chennai | Coimbatore | Cuddalore | Dharmapuri | Dindigul | Erode | Kanchipuram | Kanyakumari | Karur | Krishnagiri | Madurai | Nagapattinam | Namakkal | Nilgiris | Perambalur | Pudukkottai | Ramanathapuram | Salem | Sivaganga | Thanjavur | Theni | Thoothukudi (Tuticorin) | Tiruchirappalli | Tirunelveli | Tiruppur | Tiruvallur | Tiruvannamalai | Tiruvarur | Vellore | Viluppuram | Virudhunagar ";
  state_array[32] =
    " Adilabad | Bhadradri Kothagudem | Hyderabad | Jagtial | Jangaon | Jayashankar Bhoopalpally | Jogulamba Gadwal | Kamareddy | Karimnagar | Khammam | Komaram Bheem Asifabad | Mahabubabad | Mahabubnagar | Mancherial | Medak | Medchal | Nagarkurnool | Nalgonda | Nirmal | Nizamabad | Peddapalli | Rajanna Sircilla | Rangareddy | Sangareddy | Siddipet | Suryapet | Vikarabad | Wanaparthy | Warangal (Rural) | Warangal (Urban) | Yadadri Bhuvanagiri ";
  state_array[33]= " Dhalai | Gomati | Khowai | North Tripura | Sepahijala | South Tripura | Unakoti | West Tripura ";
  state_array[34] =
    " Agra | Aligarh | Allahabad | Ambedkar Nagar | Amethi (Chatrapati Sahuji Mahraj Nagar) | Amroha (J.P. Nagar) | Auraiya | Azamgarh | Baghpat | Bahraich | Ballia | Balrampur | Banda | Barabanki | Bareilly | Basti | Bhadohi | Bijnor | Budaun | Bulandshahr | Chandauli | Chitrakoot | Deoria | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Gautam Buddha Nagar | Ghaziabad | Ghazipur | Gonda | Gorakhpur | Hamirpur | Hapur (Panchsheel Nagar) | Hardoi | Hathras | Jalaun | Jaunpur | Jhansi | Kannauj | Kanpur Dehat | Kanpur Nagar | Kanshiram Nagar (Kasganj) | Kaushambi | Kushinagar (Padrauna) | Lakhimpur - Kheri | Lalitpur | Lucknow | Maharajganj | Mahoba | Mainpuri | Mathura | Mau | Meerut | Mirzapur | Moradabad | Muzaffarnagar | Pilibhit | Pratapgarh | RaeBareli | Rampur | Saharanpur | Sambhal (Bhim Nagar) | Sant Kabir Nagar | Shahjahanpur | Shamali (Prabuddh Nagar) | Shravasti | Siddharth Nagar | Sitapur | Sonbhadra | Sultanpur | Unnao | Varanasi ";
  state_array[35] =
    " Almora | Bageshwar | Chamoli | Champawat | Dehradun | Haridwar | Nainital | Pauri Garhwal | Pithoragarh | Rudraprayag | Tehri Garhwal | Udham Singh Nagar | Uttarkashi ";
  state_array[36] =
    " Alipurduar | Bankura | Birbhum | Burdwan (Bardhaman) | Cooch Behar | Dakshin Dinajpur (South Dinajpur) | Darjeeling | Hooghly | Howrah | Jalpaiguri | Kalimpong | Kolkata | Malda | Murshidabad | Nadia | North 24 Parganas | Paschim Medinipur (West Medinipur) | Purba Medinipur (East Medinipur) | Purulia | South 24 Parganas | Uttar Dinajpur (North Dinajpur) ";
  function print_state(state_id) {
    var option_str = document.getElementById(state_id);
    option_str.length = 0;
    option_str.options[0] = new Option("Select State", "");
    option_str.selectedIndex = 0;
    for (var i = 0; i < state_arr.length; i++) {
      option_str.options[option_str.length] = new Option(
        state_arr[i],
        state_arr[i]
      );
    }
  }

  function print_districts(districts_id, districts_index) {
    var option_str = document.getElementById(districts_id);
    option_str.length = 0;
    option_str.options[0] = new Option("Select District", "");
    option_str.selectedIndex = 0;
    var districtstate_arrayrr = state_array[districts_index].split("|");
    for (var i = 0; i < districtstate_arrayrr.length; i++) {
      option_str.options[option_str.length] = new Option(
        districtstate_arrayrr[i],
        districtstate_arrayrr[i]
      );
    }
  }

  (function() {
      'use strict';
      window.addEventListener('load', function() {
          var forms = document.getElementsByClassName('needs-validation');
          var validation = Array.prototype.filter.call(forms, function(form) {
              form.addEventListener('submit', function(event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();