import React from 'react';
import "./cvFuncs.js";
import "./cvStyle.css";

function FirstCV() {
  return (
    <div>
  <meta charSet="UTF-8" /><title>Job Application</title>
  <link href="css/form.css" rel="stylesheet" type="text/css" />

  {/* Change or deletion of the name attributes in the input tag will lead to empty values on record submission*/}
  <div className="zf-templateWidth"><form action="https://forms.zohopublic.com/areebahsohail02/form/JobApplication/formperma/HgQqeUlTD8i3V_x5ZchpT00i-Z6gb9-D5KQaWWiOQ1M/htmlRecords/submit" name="form" method="POST" onsubmit="javascript:document.charset=&quot;UTF-8&quot;; return zf_ValidateAndSubmit();" acceptCharset="UTF-8" encType="multipart/form-data" id="form"><input type="hidden" name="zf_referrer_name" defaultValue />{/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
      <input type="hidden" name="zf_redirect_url" defaultValue />{/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
      <input type="hidden" name="zc_gad" defaultValue />{/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
      <div className="zf-templateWrapper">{/*-------template Header Starts Here--------*/}
        <ul className="zf-tempHeadBdr"><li className="zf-tempHeadContBdr"><h2 className="zf-frmTitle"><em>Job Application</em></h2>
            <p className="zf-frmDesc" />
            <div className="zf-clearBoth" /></li></ul>{/*-------template Header Ends Here--------*/}
        
        
        {/*-------template Container Starts Here--------*/}
        <div className="zf-subContWrap zf-leftAlign"><ul>
           
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section"><h2>Personal Information</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
           


            {/*-------Name Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-name zf-namelarge"><label className="zf-labelName"> 
                Full name 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv zf-twoType">
                <div className="zf-nameWrapper">
                  <span> <input type="text" maxLength={255} name="Name_First" fieldtype={7} placeholder /> <label>First</label>
                  </span> 
                  <span> <input type="text" maxLength={255} name="Name_Last" fieldtype={7} placeholder /> <label>Last</label>
                  </span> 
                  <div className="zf-clearBoth" /></div><p id="Name_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Name Ends Here--------*/} 
           
           
           
            {/*-------Date Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-date"><label className="zf-labelName"> 
                Date of birth 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="Date" checktype="c4" defaultValue maxLength={25} placeholder /><label>dd-MMM-yyyy</label> </span><div className="zf-clearBoth" /><p id="Date_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Date Ends Here--------*/} 
            
            
            
            {/*-------Radio Starts Here--------*/}    
            <li className="zf-radio zf-tempFrmWrapper zf-sideBySide"><label className="zf-labelName">Gender
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <div className="zf-overflow">
                  <span className="zf-multiAttType"> 
                    <input className="zf-radioBtnType" type="radio" id="Radio_1" name="Radio" checktype="c1" defaultValue="Male" />
                    <label htmlFor="Radio_1" className="zf-radioChoice">Male</label> </span>
                  <span className="zf-multiAttType"> 
                    <input className="zf-radioBtnType" type="radio" id="Radio_2" name="Radio" checktype="c1" defaultValue="Female" />
                    <label htmlFor="Radio_2" className="zf-radioChoice">Female</label> </span>
                  <div className="zf-clearBoth" /></div><p id="Radio_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Radio Ends Here--------*/}    
            
            
            
            {/*-------Dropdown Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName">
                Education
              </label>
              <div className="zf-tempContDiv">
                <select className="zf-form-sBox" name="Dropdown" checktype="c1">
                  <option selected="true" value="-Select-">-Select-</option>
                  <option value="School">School</option>
                  <option value="Under Graduate">Under Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select><p id="Dropdown_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Dropdown Ends Here--------*/}
            {/*fileupload*/}
           
           
           
           
            {/*-------File Upload Starts Here--------*/}  
            <li className="zf-tempFrmWrapper"><label className="zf-labelName">Resume
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <input type="file" name="FileUpload" checktype="c1" />
                <p id="FileUpload_error" className="zf-errorMessage" style={{"display":"none"}}>Choose any file for this field.</p>
              </div><div className="zf-clearBoth" /></li>{/*-------File Upload Ends Here--------*/}  
            {/*address*/}
           
           
           
           
            {/*-------Address Starts Here--------*/}  
            <li className="zf-tempFrmWrapper zf-address zf-addrlarge "><label className="zf-labelName"> 
                Address 
              </label>
              <div className="zf-tempContDiv zf-address">
                <div className="zf-addrCont">
                  <span className="zf-addOne"> <input type="text" maxLength={255} name="Address_AddressLine1" checktype="c1" placeholder />
                    <label>Street Address</label>
                  </span>
                  <span className="zf-addOne"> <input type="text" maxLength={255} name="Address_AddressLine2" checktype="c1" placeholder />
                    <label>Address Line 2</label>
                  </span>
                  <span className="zf-flLeft zf-addtwo"> <input type="text" maxLength={255} name="Address_City" checktype="c1" placeholder />
                    <label>City</label>
                  </span>
                  <span className="zf-flLeft zf-addtwo"> <input type="text" maxLength={255} name="Address_Region" checktype="c1" placeholder />
                    <label>State/Region/Province</label>
                  </span>
                  <span className="zf-flLeft zf-addtwo"> <input type="text" maxLength={255} name="Address_ZipCode" checktype="c1" placeholder />
                    <label>Postal / Zip Code</label>
                  </span>
                  <span className="zf-flLeft zf-addtwo"> <select className="zf-form-sBox" name="Address_Country" checktype="c1">
                      <option value="-Select-">-Select-</option> 
                      <option>Åland Islands</option>
                      <option>Afghanistan</option>
                      <option>Akrotiri</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>American Samoa</option>
                      <option>Andorra</option>
                      <option>Angola</option>
                      <option>Anguilla</option>
                      <option>Antarctica</option>
                      <option>Antigua and Barbuda</option>
                      <option>Argentina</option>
                      <option>Armenia</option>
                      <option>Aruba</option>
                      <option>Ashmore and Cartier Islands</option>
                      <option>Australia</option>
                      <option>Austria</option>
                      <option>Azerbaijan</option>
                      <option>Bahrain</option>
                      <option>Bangladesh</option>
                      <option>Barbados</option>
                      <option>Bassas Da India</option>
                      <option>Belarus</option>
                      <option>Belgium</option>
                      <option>Belize</option>
                      <option>Benin</option>
                      <option>Bermuda</option>
                      <option>Bhutan</option>
                      <option>Bolivia</option>
                      <option>Bosnia and Herzegovina</option>
                      <option>Botswana</option>
                      <option>Bouvet Island</option>
                      <option>Brazil</option>
                      <option>British Indian Ocean Territory</option>
                      <option>British Virgin Islands</option>
                      <option>Brunei</option>
                      <option>Bulgaria</option>
                      <option>Burkina Faso</option>
                      <option>Burma</option>
                      <option>Burundi</option>
                      <option>Cambodia</option>
                      <option>Cameroon</option>
                      <option>Canada</option>
                      <option>Cape Verde</option>
                      <option>Caribbean Netherlands</option>
                      <option>Cayman Islands</option>
                      <option>Central African Republic</option>
                      <option>Chad</option>
                      <option>Chile</option>
                      <option>China</option>
                      <option>Christmas Island</option>
                      <option>Clipperton Island</option>
                      <option>Cocos (Keeling) Islands</option>
                      <option>Colombia</option>
                      <option>Comoros</option>
                      <option>Cook Islands</option>
                      <option>Coral Sea Islands</option>
                      <option>Costa Rica</option>
                      <option>Cote D'Ivoire</option>
                      <option>Croatia</option>
                      <option>Cuba</option>
                      <option>Curaçao</option>
                      <option>Cyprus</option>
                      <option>Czech Republic</option>
                      <option>Democratic Republic of the Congo</option>
                      <option>Denmark</option>
                      <option>Dhekelia</option>
                      <option>Djibouti</option>
                      <option>Dominica</option>
                      <option>Dominican Republic</option>
                      <option>Ecuador</option>
                      <option>Egypt</option>
                      <option>El Salvador</option>
                      <option>Equatorial Guinea</option>
                      <option>Eritrea</option>
                      <option>Estonia</option>
                      <option>Ethiopia</option>
                      <option>Europa Island</option>
                      <option>Falkland Islands (Islas Malvinas)</option>
                      <option>Faroe Islands</option>
                      <option>Federated States of Micronesia</option>
                      <option>Fiji</option>
                      <option>Finland</option>
                      <option>France</option>
                      <option>French Guiana</option>
                      <option>French Polynesia</option>
                      <option>French Southern and Antarctic Lands</option>
                      <option>Gabon</option>
                      <option>Gaza Strip</option>
                      <option>Georgia</option>
                      <option>Germany</option>
                      <option>Ghana</option>
                      <option>Gibraltar</option>
                      <option>Glorioso Islands</option>
                      <option>Greece</option>
                      <option>Greenland</option>
                      <option>Grenada</option>
                      <option>Guadeloupe</option>
                      <option>Guam</option>
                      <option>Guatemala</option>
                      <option>Guernsey</option>
                      <option>Guinea</option>
                      <option>Guinea-bissau</option>
                      <option>Guyana</option>
                      <option>Haiti</option>
                      <option>Heard Island and Mcdonald Islands</option>
                      <option>Holy See (Vatican City)</option>
                      <option>Honduras</option>
                      <option>Hong Kong</option>
                      <option>Hungary</option>
                      <option>Iceland</option>
                      <option>India</option>
                      <option>Indonesia</option>
                      <option>Iran</option>
                      <option>Iraq</option>
                      <option>Ireland</option>
                      <option>Isle of Man</option>
                      <option>Israel</option>
                      <option>Italy</option>
                      <option>Jamaica</option>
                      <option>Jan Mayen</option>
                      <option>Japan</option>
                      <option>Jersey</option>
                      <option>Jordan</option>
                      <option>Juan De Nova Island</option>
                      <option>Kazakhstan</option>
                      <option>Kenya</option>
                      <option>Kiribati</option>
                      <option>Kosovo</option>
                      <option>Kuwait</option>
                      <option>Kyrgyzstan</option>
                      <option>Laos</option>
                      <option>Latvia</option>
                      <option>Lebanon</option>
                      <option>Lesotho</option>
                      <option>Liberia</option>
                      <option>Libya</option>
                      <option>Liechtenstein</option>
                      <option>Lithuania</option>
                      <option>Luxembourg</option>
                      <option>Macau</option>
                      <option>Macedonia</option>
                      <option>Madagascar</option>
                      <option>Malawi</option>
                      <option>Malaysia</option>
                      <option>Maldives</option>
                      <option>Mali</option>
                      <option>Malta</option>
                      <option>Marshall Islands</option>
                      <option>Martinique</option>
                      <option>Mauritania</option>
                      <option>Mauritius</option>
                      <option>Mayotte</option>
                      <option>Mexico</option>
                      <option>Moldova</option>
                      <option>Monaco</option>
                      <option>Mongolia</option>
                      <option>Montenegro</option>
                      <option>Montserrat</option>
                      <option>Morocco</option>
                      <option>Mozambique</option>
                      <option>Myanmar</option>
                      <option>Namibia</option>
                      <option>Nauru</option>
                      <option>Navassa Island</option>
                      <option>Nepal</option>
                      <option>Netherlands</option>
                      <option>Netherlands Antilles</option>
                      <option>New Caledonia</option>
                      <option>New Zealand</option>
                      <option>Nicaragua</option>
                      <option>Niger</option>
                      <option>Nigeria</option>
                      <option>Niue</option>
                      <option>Norfolk Island</option>
                      <option>North Korea</option>
                      <option>Northern Mariana Islands</option>
                      <option>Norway</option>
                      <option>Oman</option>
                      <option>Pakistan</option>
                      <option>Palau</option>
                      <option>Palestine</option>
                      <option>Panama</option>
                      <option>Papua New Guinea</option>
                      <option>Paracel Islands</option>
                      <option>Paraguay</option>
                      <option>Peru</option>
                      <option>Philippines</option>
                      <option>Pitcairn Islands</option>
                      <option>Poland</option>
                      <option>Portugal</option>
                      <option>Puerto Rico</option>
                      <option>Qatar</option>
                      <option>Republic of the Congo</option>
                      <option>Reunion</option>
                      <option>Romania</option>
                      <option>Russia</option>
                      <option>Rwanda</option>
                      <option>Saint BarthÃ©lemy</option>
                      <option>Saint Helena</option>
                      <option>Saint Kitts and Nevis</option>
                      <option>Saint Lucia</option>
                      <option>Saint Martin</option>
                      <option>Saint Pierre and Miquelon</option>
                      <option>Saint Vincent and the Grenadines</option>
                      <option>Samoa</option>
                      <option>San Marino</option>
                      <option>Sao Tome and Principe</option>
                      <option>Saudi Arabia</option>
                      <option>Senegal</option>
                      <option>Serbia</option>
                      <option>Seychelles</option>
                      <option>Sierra Leone</option>
                      <option>Singapore</option>
                      <option>Sint Maarten</option>
                      <option>Slovakia</option>
                      <option>Slovenia</option>
                      <option>Solomon Islands</option>
                      <option>Somalia</option>
                      <option>South Africa</option>
                      <option>South Georgia and the South Sandwich Islands</option>
                      <option>South Korea</option>
                      <option>South Sudan</option>
                      <option>Spain</option>
                      <option>Spratly Islands</option>
                      <option>Sri Lanka</option>
                      <option>Sudan</option>
                      <option>Suriname</option>
                      <option>Svalbard</option>
                      <option>Swaziland</option>
                      <option>Sweden</option>
                      <option>Switzerland</option>
                      <option>Syria</option>
                      <option>Taiwan</option>
                      <option>Tajikistan</option>
                      <option>Tanzania</option>
                      <option>Thailand</option>
                      <option>The Bahamas</option>
                      <option>The Gambia</option>
                      <option>Timor-leste</option>
                      <option>Togo</option>
                      <option>Tokelau</option>
                      <option>Tonga</option>
                      <option>Trinidad and Tobago</option>
                      <option>Tromelin Island</option>
                      <option>Tunisia</option>
                      <option>Turkey</option>
                      <option>Turkmenistan</option>
                      <option>Turks and Caicos Islands</option>
                      <option>Tuvalu</option>
                      <option>Uganda</option>
                      <option>Ukraine</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Uruguay</option>
                      <option>Uzbekistan</option>
                      <option>Vanuatu</option>
                      <option>Venezuela</option>
                      <option>Vietnam</option>
                      <option>Virgin Islands</option>
                      <option>Wake Island</option>
                      <option>Wallis and Futuna</option>
                      <option>West Bank</option>
                      <option>Western Sahara</option>
                      <option>Yemen</option>
                      <option>Zambia</option>
                      <option>Zimbabwe</option>
                    </select>
                    <label>Country</label>
                  </span>
                  <div className="zf-clearBoth" /><p id="Address_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
                </div></div><div className="zf-eclearBoth" /></li>{/*-------Address Ends Here--------*/}
           
           
           
           
            {/*-------Email Starts Here--------*/}  
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Email 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <span> <input fieldtype={9} type="text" maxLength={255} name="Email" checktype="c5" defaultValue placeholder /></span> <p id="Email_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Email Ends Here--------*/}  
            
            
            
            
            {/*-------Phone Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Phone 
              </label>
              <div className="zf-tempContDiv zf-phonefld">
                <div className="zf-phwrapper zf-phNumber">
                  <span> <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" maxLength={20} checktype="c7" defaultValue phoneformat={1} iscountrycodeenabled="false" fieldtype={11} id="international_PhoneNumber_countrycode" valtype="number" phoneformattype={1} placeholder />
                    <label>Number</label> </span>
                  <div className="zf-clearBoth" /></div><p id="PhoneNumber_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Phone Ends Here--------*/} 
            {/*-------Multiple Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Leisure interests 
              </label>
              <div className="zf-tempContDiv">
                <span> <textarea name="MultiLine" checktype="c1" maxLength={65535} placeholder defaultValue={""} /> </span><p id="MultiLine_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Multiple Line Ends Here--------*/}
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section"><h2>Previous/Current Employment Details</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Company name 
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="SingleLine" checktype="c1" defaultValue maxLength={255} fieldtype={1} placeholder /></span> <p id="SingleLine_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Single Line Ends Here--------*/}
            {/*-------Date Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-date"><label className="zf-labelName"> 
                Date of joining 
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="Date1" checktype="c4" defaultValue maxLength={25} placeholder /><label>dd-MMM-yyyy</label> </span><div className="zf-clearBoth" /><p id="Date1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Date Ends Here--------*/} 
            {/*-------Date Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-date"><label className="zf-labelName"> 
                Date of leaving 
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="Date2" checktype="c4" defaultValue maxLength={25} placeholder /><label>dd-MMM-yyyy</label> </span><div className="zf-clearBoth" /><p id="Date2_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Date Ends Here--------*/} 
            {/*-------Single Line Starts Here--------*/}
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Designation 
              </label>
              <div className="zf-tempContDiv">
                <span> <input type="text" name="SingleLine1" checktype="c1" defaultValue maxLength={255} fieldtype={1} placeholder /></span> <p id="SingleLine1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Single Line Ends Here--------*/}
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section"><h2>Reference #1</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
            {/*-------Name Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-name zf-namelarge"><label className="zf-labelName"> 
                Name 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv zf-twoType">
                <div className="zf-nameWrapper">
                  <span> <input type="text" maxLength={255} name="Name1_First" fieldtype={7} placeholder /> <label>First</label>
                  </span> 
                  <span> <input type="text" maxLength={255} name="Name1_Last" fieldtype={7} placeholder /> <label>Last</label>
                  </span> 
                  <div className="zf-clearBoth" /></div><p id="Name1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Name Ends Here--------*/} 
            {/*-------Email Starts Here--------*/}  
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Email 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <span> <input fieldtype={9} type="text" maxLength={255} name="Email1" checktype="c5" defaultValue placeholder /></span> <p id="Email1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Email Ends Here--------*/}  
            {/*-------Phone Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Phone 
              </label>
              <div className="zf-tempContDiv zf-phonefld">
                <div className="zf-phwrapper zf-phNumber">
                  <span> <input type="text" compname="PhoneNumber1" name="PhoneNumber1_countrycode" maxLength={20} checktype="c7" defaultValue phoneformat={1} iscountrycodeenabled="false" fieldtype={11} id="international_PhoneNumber1_countrycode" valtype="number" phoneformattype={1} placeholder />
                    <label>Number</label> </span>
                  <div className="zf-clearBoth" /></div><p id="PhoneNumber1_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Phone Ends Here--------*/} 
            {/*-------Section Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-section"><h2>Reference #2</h2>
              <p /></li>{/*-------Section Ends Here--------*/} 
            {/*-------Name Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-name zf-namelarge"><label className="zf-labelName"> 
                Name 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv zf-twoType">
                <div className="zf-nameWrapper">
                  <span> <input type="text" maxLength={255} name="Name2_First" fieldtype={7} placeholder /> <label>First</label>
                  </span> 
                  <span> <input type="text" maxLength={255} name="Name2_Last" fieldtype={7} placeholder /> <label>Last</label>
                  </span> 
                  <div className="zf-clearBoth" /></div><p id="Name2_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Name Ends Here--------*/} 
            {/*-------Email Starts Here--------*/}  
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Email 
                <em className="zf-important">*</em>
              </label>
              <div className="zf-tempContDiv">
                <span> <input fieldtype={9} type="text" maxLength={255} name="Email2" checktype="c5" defaultValue placeholder /></span> <p id="Email2_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Email Ends Here--------*/}  
            {/*-------Phone Starts Here--------*/} 
            <li className="zf-tempFrmWrapper zf-large"><label className="zf-labelName"> 
                Phone 
              </label>
              <div className="zf-tempContDiv zf-phonefld">
                <div className="zf-phwrapper zf-phNumber">
                  <span> <input type="text" compname="PhoneNumber2" name="PhoneNumber2_countrycode" maxLength={20} checktype="c7" defaultValue phoneformat={1} iscountrycodeenabled="false" fieldtype={11} id="international_PhoneNumber2_countrycode" valtype="number" phoneformattype={1} placeholder />
                    <label>Number</label> </span>
                  <div className="zf-clearBoth" /></div><p id="PhoneNumber2_error" className="zf-errorMessage" style={{"display":"none"}}>Invalid value</p>
              </div><div className="zf-clearBoth" /></li>{/*-------Phone Ends Here--------*/} 
          </ul></div>{/*-------template Container Starts Here--------*/}
        <ul><li className="zf-fmFooter"><button className="zf-submitColor">Submit</button></li></ul></div>{/* 'zf-templateWrapper' ends */}</form></div>{/* 'zf-templateWidth' ends */}
</div>
  )
}

export default FirstCV