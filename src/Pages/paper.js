import React from 'react'; 
import "./CSS/paper.scss"
 
 
 
const data = [
 
    {
      "FIELD1": "1",
      "FIELD2": "Kumar, G., & Sharma, A. K. (2018). Role of dielectric   fluid and concentrator material in microwave drilling of borosilicate glass.   Journal of Manufacturing Processes, 33, 184-193.",
      "FIELD3": "https://doi.org/10.1016/j.jmapro.2018.05.010",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "2",
      "FIELD2": "Sreehari, D., & Sharma, A. K. (2018). On form accuracy and   surface roughness in micro-ultrasonic machining of silicon   microchannels. Precision Engineering.",
      "FIELD3": "https://doi.org/10.1016/j.precisioneng.2018.04.014",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "3",
      "FIELD2": "Sharma, A. K., & Mishra, R. R. (2018). Role of particle   size in microwave processing of metallic material systems. Materials   Science and Technology, 34(2), 123-137.",
      "FIELD3": "https://doi.org/10.1080/02670836.2017.1412043",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "4",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2017). Effect of Solidification Environment on Microstructure and   Indentation Hardness of Al Zn Mg Alloy Casts Developed Using Microwave   Heating. International Journal of Metalcasting, 1-13. ",
      "FIELD3": "https://doi.org/10.1007/s40962-017-0176-1",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "5",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2017). Effect of susceptor and mold material on microstructure of   in-situ microwave casts of Al-Zn-Mg alloy. Materials & Design, 131,   428-440. ",
      "FIELD3": "https://doi.org/10.1016/j.matdes.2017.06.038",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "6",
      "FIELD2": "Gamit, D., Mishra, R. R.,   & Sharma, A. K. (2017). Joining of mild steel pipes using microwave   hybrid heating at 2.45 GHz and joint characterization. Journal of   Manufacturing Processes, 27, 158-168. ",
      "FIELD3": "https://doi.org/10.1016/j.jmapro.2017.04.028",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "7",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2017). Microstructure and Mechanical Properties of Microwave Post-processed   Ni Coating. Journal of Materials Engineering and Performance, 26(3),   1382-1390. ",
      "FIELD3": "https://doi.org/10.1007/s11665-017-2540-y ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "8",
      "FIELD2": "Goud, M.,   & Sharma, A. K. (2017). On performance studies during micromachining of   quartz glass using electrochemical discharge machining. Journal of Mechanical   Science and Technology, 31(3), 1365-1372. ",
      "FIELD3": "https://doi.org/10.1007/s12206-017-0236-8 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "9",
      "FIELD2": "Bansal, A., Sharma, A. K.,   & Kumar, P. (2017). Galvanic Corrosion Behavior of Microwave Welded and   Post-weld Heat-Treated Inconel-718 Joints. Journal of Materials Engineering   and Performance, 26(5), 2322-2330. ",
      "FIELD3": "https://doi.org/10.1007/s11665-017-2665-z ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "10",
      "FIELD2": "Mishra, R. R.,   & Sharma, A. K. (2017). Structure-property correlation in Al Zn Mg alloy   cast developed through in-situ microwave casting. Materials Science and   Engineering: A, 688, 532-544. ",
      "FIELD3": "https://doi.org/10.1016/j.msea.2017.02.021 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "11",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2017). On melting characteristics of bulk Al-7039 alloy during in-situ   microwave casting. Applied Thermal Engineering, 111, 660-675. ",
      "FIELD3": "https://doi.org/10.1016/j.applthermaleng.2016.09.122 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "12",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2016). On mechanism of in-situ microwave casting of aluminium alloy   7039 and cast microstructure. Materials & Design, 112, 97-106. ",
      "FIELD3": "https://doi.org/10.1016/j.matdes.2016.09.041 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "13",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2016). Microstructure and wear performance of heat treated WC-12Co microwave   clad. Vacuum, 131, 213-222. ",
      "FIELD3": "https://doi.org/10.1016/j.vacuum.2016.06.021 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "14",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2016). Investigations on flexural performance and residual stresses in   nanometric WC-12Co microwave clads. Surface and Coatings Technology, 291,   413-422. ",
      "FIELD3": "https://doi.org/10.1016/j.surfcoat.2016.03.009 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "15",
      "FIELD2": "Goud, M., & Sharma, A. K.   (2017). A three-dimensional finite element simulation approach to analyze   material removal in electrochemical discharge machining. Proceedings of the   Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering   Science, 231(13), 2417-2428. ",
      "FIELD3": "https://doi.org/10.1177/0954406216636167 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "16",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2016). Structure-property correlations in nanostructured WC 12Co microwave   clad. Applied Surface Science, 370, 92-101. ",
      "FIELD3": "https://doi.org/10.1016/j.apsusc.2016.02.114",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "17",
      "FIELD2": "Goud, M., Sharma, A. K., &   Jawalkar, C. (2016). A review on material removal mechanism in   electrochemical discharge machining (ECDM) and possibilities to enhance the   material removal rate. Precision Engineering, 45, 1-17. ",
      "FIELD3": "https://doi.org/10.1016/j.precisioneng.2016.01.007 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "18",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2016). A review of research trends in microwave processing of   metal-based materials and opportunities in microwave metal casting. Critical   Reviews in Solid State and Materials Sciences, 41(3), 217-255. ",
      "FIELD3": "http://dx.doi.org/10.1080/10408436.2016.1142421 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "19",
      "FIELD2": "Cheema, M. S.,   Singh, P. K., Tyagi, O., Dvivedi, A., & Sharma, A. K. (2016). Tool wear   and form accuracy in ultrasonically machined microchannels. Measurement, 81,   85-94. ",
      "FIELD3": "https://doi.org/10.1016/j.measurement.2015.12.005 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "20",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2016). Abrasive and erosive wear behaviour of nanometric WC 12Co microwave   clads. Wear, 346, 29-45. ",
      "FIELD3": "https://doi.org/10.1016/j.wear.2015.11.003 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "21",
      "FIELD2": "Mishra, R. R., & Sharma,   A. K. (2016). Microwave material interaction phenomena: heating mechanisms,   challenges and opportunities in material processing. Composites Part A:   Applied Science and Manufacturing, 81, 78-97.",
      "FIELD3": "https://doi.org/10.1016/j.compositesa.2015.10.035 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "22",
      "FIELD2": "Bansal, A., Zafar, S., &   Sharma, A. K. (2015). Microstructure and abrasive wear performance of Ni-WC   composite microwave clad. Journal of Materials Engineering and Performance,   24(10), 3708-3716. ",
      "FIELD3": "https://doi.org/10.1007/s11665-015-1657-0 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "23",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2015). Dry sliding wear performance of nanostructured WC 12Co deposited   through microwave cladding. Tribology International, 91, 14-22. ",
      "FIELD3": "https://doi.org/10.1016/j.triboint.2015.06.023 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "24",
      "FIELD2": "Lautre, N. K., Sharma, A. K.,   Pradeep, K., & Das, S. (2015). A simulation approach to material removal   in microwave drilling of soda lime glass at 2.45 GHz. Applied Physics A,   120(4), 1261-1274. ",
      "FIELD3": "https://doi.org/10.1007/s00339-015-9370-2",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "25",
      "FIELD2": "Lautre, N. K.,   Sharma, A. K., Kumar, P., & Das, S. (2015). A photoelasticity approach   for characterization of defects in microwave drilling of soda lime glass.   Journal of Materials Processing Technology, 225, 151-161. ",
      "FIELD3": "https://doi.org/10.1016/j.jmatprotec.2015.05.026 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "26",
      "FIELD2": "Lautre, N. K., Sharma, A. K.,   Das, S., & Kumar, P. (2015). On Crack Control Strategy in Near-Field   Microwave Drilling of Soda Lime Glass Using Precursors. Journal of Thermal   Science and Engineering Applications, 7(4), 041001. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "27",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Kumar, P., & Das, S. (2015). Structure property correlations in microwave   joining of Inconel 718. Jom, 67(9), 2087-2098. ",
      "FIELD3": "https://doi.org/10.1007/s11837-015-1523-4 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "28",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Das, S., & Kumar, P. (2016). On microstructure and strength properties of   microwave welded Inconel 718/stainless steel (SS-316L). Proceedings of the   Institution of Mechanical Engineers, Part L: Journal of Materials: Design and   Applications, 230(5), 939-948. ",
      "FIELD3": "https://doi.org/10.1177/1464420715589206 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "29",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2015). On friction and wear behavior of WC-12Co microwave clad. Tribology   Transactions, 58(4), 584-591. ",
      "FIELD3": "http://dx.doi.org/10.1080/10402004.2014.996310 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "30",
      "FIELD2": "Sharma, A. K., Venkatesh, G.,   Rajesha, S., & Kumar, P. (2015). Experimental investigations into   ultrasonic-assisted abrasive flow machining (UAAFM) process. Int J Adv Manuf   Technol, 80, 477-493. ",
      "FIELD3": "https://doi.org/10.1007/s00170-015-7009-2 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "31",
      "FIELD2": "Gudipadu, V., Sharma, A. K.,   & Singh, N. (2015). Simulation of media behaviour in vibration assisted   abrasive flow machining. Simulation Modelling Practice and Theory, 51,   1-13. ",
      "FIELD3": "https://doi.org/10.1016/j.simpat.2014.10.009 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "32",
      "FIELD2": "Cheema, M. S., Dvivedi, A.,   & Sharma, A. K. (2015). Tool wear studies in fabrication of microchannels   in ultrasonic micromachining. Ultrasonics, 57, 57-64. ",
      "FIELD3": "https://doi.org/10.1016/j.ultras.2014.10.018 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "33",
      "FIELD2": "Singh, S., Gupta, D., Jain,   V., & Sharma, A. K. (2015). Microwave processing of materials and   applications in manufacturing industries: A review. Materials and   Manufacturing Processes, 30(1), 1-29. ",
      "FIELD3": "http://dx.doi.org/10.1080/10426914.2014.952028",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "34",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Das, S., & Kumar, P. (2016). Characterization of microstructure and   strength of microwave welded Inconel 718 joints at 2.45 GHz frequency. KOVOVE   MATERIALY-METALLIC MATERIALS, 54(1), 27-35. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "35",
      "FIELD2": "Venkatesh, G., Sharma, A. K.,   & Kumar, P. (2015). On ultrasonic assisted abrasive flow finishing of   bevel gears. International Journal of Machine Tools and Manufacture, 89,   29-38. ",
      "FIELD3": "https://doi.org/10.1016/j.ijmachtools.2014.10.014 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "36",
      "FIELD2": "Venkatesh, G., Sharma, A. K.,   & Kumar, P. (2015). Fine finishing of SiC microchannels using abrasive   flow machining. Indian Journal of Engineering & Materials and Sciences,   22, 297-306, ",
      "FIELD3": "http://nopr.niscair.res.in/handle/123456789/31752 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "37",
      "FIELD2": "Sutar, M. K., Pathak, P. M.,   Mehta, N. K., Sharma, A. K., & Gupta, V. K. (2015). Inverse kinematics   and control of 4-degree-of-freedom wire-actuated in vivo robot. Proceedings   of the Institution of Mechanical Engineers, Part I: Journal of Systems and   Control Engineering, 229(2), 77-91. ",
      "FIELD3": "https://doi.org/10.1177/0959651814557111 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "38",
      "FIELD2": "Venkatesh, G., & Sharma,   A. K. (2014). Finishing of Bevel Gears using Abrasive Flow Machining.   Procedia Engineering, 97, 320-328. ",
      "FIELD3": "https://doi.org/10.1016/j.proeng.2014.12.255 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "39",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Kumar, P., & Das, S. (2016). Investigation on microstructure and   mechanical properties of the dissimilar weld between mild steel and stainless   steel-316 formed using microwave energy. Proceedings of the Institution of   Mechanical Engineers, Part B: Journal of Engineering Manufacture, 230(3),   439-448. ",
      "FIELD3": "https://doi.org/10.1177/0954405414558694 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "40",
      "FIELD2": "Zafar, S., & Sharma, A. K.   (2014). Development and characterisations of WC 12Co microwave clad.   Materials Characterization, 96, 241-248. ",
      "FIELD3": "https://doi.org/10.1016/j.matchar.2014.08.015 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "41",
      "FIELD2": "Zafar, S., Bansal, A., Sharma,   A. K., Arora, N., & Ramesh, C. S. (2014). Dry erosion wear performance of   Inconel 718 microwave clad. Surface Engineering, 30(11), 852-859. ",
      "FIELD3": "http://dx.doi.org/10.1179/1743294414Y.0000000359 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "42",
      "FIELD2": "Jawalkar, C. S., Sharma, A.   K., & Kumar, P. (2014). Investigations on performance of ECDM process   using NaOH and NaNO3 electrolytes while micro machining soda lime glass.   International Journal of Manufacturing Technology and Management, 28(1-3),   80-93.",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "43",
      "FIELD2": "Garg, A., Vikram, C. S.,   Gupta, S., Sutar, M. K., Pathak, P. M., Mehta, N. K., ... & Gupta, V. K.   (2014). Design and development of in vivo robot for biopsy. Mechanics based   design of structures and machines, 42(3), 278-295. ",
      "FIELD3": "http://dx.doi.org/10.1080/15397734.2014.898587 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "44",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Kumar, P., & Das, S. (2014). Characterization of bulk stainless steel   joints developed through microwave hybrid heating. Materials   Characterization, 91, 34-41. ",
      "FIELD3": "https://doi.org/10.1016/j.matchar.2014.02.005",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "45",
      "FIELD2": "Rajesha, S., Jawalkar, C. S.,   Mishra, R. R., & Sharma, A. K. (2014). Study of recast layers and surface   roughness on Al-7075 metal matrix composite during EDM machining.   International Journal of Recent Advances in Mechanical Engineering, Vol. 3   (1), 61-70. ",
      "FIELD3": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.675.4256&rep=rep1&type=pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "46",
      "FIELD2": "Mishra, R. R., Rajesha, S.,   & Sharma, A. K. (2014). Microwave sintering of pure metal powders a   review. Int. J. Adv. Mechanical Engineering, 4(3), 315-322. ",
      "FIELD3": "http://www.ripublication.com/ijame-spl/ijamev4n3spl_11.pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "47",
      "FIELD2": "Mishra, R. R., Rajesh, S.,   Sharma, A. K., & Jha, A. K. (2013). Development and Characterization of   Developed Foamed Carbon Fiber Composite-Review Paper. i-Manager's Journal on   Civil Engineering, 3(3), 23-27. (Print ISSN 2231- 1068, E-ISSN 2249-0779).",
      "FIELD3": "https://search.proquest.com/openview/bd6f7694519632c108306f60aa8e9950/1?cbl=2030627&pq-origsite=gscholar",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "48",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2014). Microwave cladding: a new approach in surface engineering. Journal of   Manufacturing Processes, 16(2), 176-182. ",
      "FIELD3": "https://doi.org/10.1016/j.jmapro.2014.01.001 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "49",
      "FIELD2": "Jawalkar, C. S., Sharma, A.   K., & Kumar, P. (2014). Investigations on performance of ECDM process   using NaOH and NaNO3 electrolytes while micro machining soda lime glass.   International Journal of Manufacturing Technology and Management, 28(1-3),   80-93. ",
      "FIELD3": "https://doi.org/10.1504/IJMTM.2014.064623",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "50",
      "FIELD2": "Mali, A., Singh, I., &   Sharma, A. K. (2013). Microwave curing of natural fiber and synthetic fiber   reinforced polymer matrix composites. i-Manager's Journal on Material   Science, 1(1), 8-14. (Print ISSN 2347 2235, E-ISSN 2347 615X).",
      "FIELD3": "https://search.proquest.com/openview/b8de8cd45f09c2c33026b4d9db272f79/1?pq-origsite=gscholar&cbl=2037357",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "51",
      "FIELD2": "Das, S., Kumar, R., George, T.   J., Bansal, A., Lautre, N. K., & Sharma, A. K. (2013). Physics of   Electrostatic Resonance With Negative Permittivity and Imaginary Index of   Refraction for Illuminated Plasmoid in the Experimental Set Up for Microwave   Near Field Applicator. Fundam. J. Mod. Phys, 5(2), 19-46. ",
      "FIELD3": "https://www.researchgate.net/profile/Shantanu_Das9/publication/270653253_Physics_of_Electrostatic_Resonance_with_Negative_Permittivity_and_Imaginary_Index_of_Refraction_for_Illuminated_Plasmoid_in_the_Experimental_Set_Up_for_Microwave_Near_Field_Applicator/links/5a82bc5f45851504fb35b02c/Physics-of-Electrostatic-Resonance-with-Negative-Permittivity-and-Imaginary-Index-of-Refraction-for-Illuminated-Plasmoid-in-the-Experimental-Set-Up-for-Microwave-Near-Field-Applicator.pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "52",
      "FIELD2": "Das, S., & Sharma, A. K.   (2012). Microwave drilling of materials. BARC News Letter, 329, 15-21. ",
      "FIELD3": "http://barc.gov.in/publications/nl/2012/2012111205.pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "53",
      "FIELD2": "Cheema, M. S., Dvivedi, A.,   Sharma, A. K., & Biswas, S. (2013). Multicriteria optimization of rotary   tool electric discharge machining on metal matrix composite. In Materials   Processing Fundamentals (159-168). Springer International Publishing. (BOOK   Chapter)",
      "FIELD3": "https://doi.org/10.1007/978-3-319-48197-5_18",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "54",
      "FIELD2": "Cheema, M. S., Dvivedi, A.,   & Sharma, A. K. (2013). A hybrid approach to multi-criteria optimization   based on user s preference rating. Proceedings of the Institution of   Mechanical Engineers, Part B: Journal of Engineering Manufacture, 227(11),   1733-1742. ",
      "FIELD3": "https://doi.org/10.1177/0954405413491958",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "55",
      "FIELD2": "Zafar, S., Sharma, A. K.,   & Arora, N. (2012). Development and microstructural characterisation of   Inconel cladding on stainless steel through microwave irradiation.   i-Manager's Journal on Mechanical Engineering, 3(1), 9-16. (Print ISSN   2230-9055, E-ISSN 2249-0744) ",
      "FIELD3": "https://www.researchgate.net/profile/Sunny_Zafar/publication/267034551_Development_And_Microstructural_Characterisation_Of_Inconel_Cladding_On_Stainless_Steel_Through_Microwave_Irradiation/links/55864e8308ae7bc2f44bf521/Development-And-Microstructural-Characterisation-Of-Inconel-Cladding-On-Stainless-Steel-Through-Microwave-Irradiation.pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "56",
      "FIELD2": "Bansal, A., Sharma, A. K.,   & Das, S. (2013). Metallurgical and mechanical characterization of mild   steel-mild steel joint formed by microwave hybrid heating process. Sadhana,   38(4), 679-686. ",
      "FIELD3": "https://doi.org/10.1007/s12046-013-0142-4 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "57",
      "FIELD2": "Das, S., Bansal, A., &   Sharma, A. K. (2012). Theory of welding of metallic parts in microwave cavity   applicator. Fundamental J. Modern Physics, Vol. 3, Issue 2, Pages   125-155. ",
      "FIELD3": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.460.4101&rep=rep1&type=pdf",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "58",
      "FIELD2": "M. Gharge, P.K. Rakesh, I.   Singh, Apurbba Kumar Sharma,  Crushing behaviour of metal matrix composite   honeycomb under impact loading , International Journal of   Engineering Simulation, 14(1), 2013,   pp.23 30. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "59",
      "FIELD2": "Jawalkar, C. S., Kumar, P.,   & Sharma, A. K. (2012). Parametric study while microchanneling on optical   glass using microcontroller driven ECDM process. In Advanced Materials   Research (Vol. 585, pp. 417-421). ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "60",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Kumar, P., & Das, S. (2012). Joining of mild steel plates using microwave   energy. In Advanced Materials Research (Vol. 585, pp. 465-469).",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "61",
      "FIELD2": "Bansal, A., Sharma, A. K.,   Kumar, P., & Das, S. (2012). Application of electromagnetic energy for   joining Inconel 718 plates. i-Manager's Journal on Mechanical Engineering,   2(4), 18-24 (DOI NOT FOUND)( Print   ISSN 2230-9055, E-ISSN 2249-0744). ",
      "FIELD3": "https://search.proquest.com/openview/870deffa7ab5529194df061187e3065f/1?pq-origsite=gscholar&cbl=2030616",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "62",
      "FIELD2": "Cheema, M. S., Venkatesh, G.,   Dvivedi, A., & Sharma, A. K. (2012). Developments in abrasive flow   machining: a review on experimental investigations using abrasive flow   machining variants and media. Proceedings of the Institution of Mechanical   Engineers, Part B: Journal of Engineering Manufacture, 226(12),   1951-1962 ",
      "FIELD3": "https://doi.org/10.1177/0954405412462000 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "63",
      "FIELD2": "Sutar, M. K., Pathak, P. M., Sharma, A. K., Mehta, N. K.,   & Gupta, V. K. (2013). Forward kinematic analysis of in-vivo robot for   stomach biopsy. Journal of robotic surgery, 7(3), 281-287.   https://doi.org/10.1007/s11701-012-0375-y",
      "FIELD3": "https://doi.org/10.1007/s11701-012-0375-y",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "64",
      "FIELD2": "Srinath M.S., Suryanarayana Murthy,   Apurbba Kumar Sharma, Pradeep Kumar, Kartikeyan M. V.,  Simulation and   Analysis of Microwave Heating while Joining Bulk Copper , International Journal of Engineering, Science and Technology, Vol.4 (2), 2012, 152-158. ",
      "FIELD3": "https://www.ajol.info/index.php/ijest/article/view/168720",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "65",
      "FIELD2": "Gupta, D., Bhovi, P. M.,   Sharma, A. K., & Dutta, S. (2012). Development and characterization of   microwave composite cladding. Journal of Manufacturing Processes, 14(3),   243-249. ",
      "FIELD3": "https://doi.org/10.1016/j.jmapro.2012.05.007",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "66",
      "FIELD2": "George, T. J., Sharma, A. K.,   & Kumar, P. (2012). A feasibility study on microwave drilling of metallic   materials. I-manager's Journal on Mechanical Engineering, 2(2), 1-6. (Print   ISSN 2230-9055, E-ISSN 2249-0744)",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "67",
      "FIELD2": "Sharma, A. K., & Gupta, D.   (2012). On microstructure and flexural strength of metal ceramic composite   cladding developed through microwave heating. Applied Surface Science,   258(15), 5583-5592. ",
      "FIELD3": "https://doi.org/10.1016/j.apsusc.2012.02.019 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "68",
      "FIELD2": "Jain, V., Sharma, A. K., &   Kumar, P. (2012). Investigations on tool wear in micro ultrasonic machining.   In Applied Mechanics and Materials (Vol. 110, pp. 1561-1566. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "69",
      "FIELD2": "Jawalkar, C. S., Sharma, A.   K., Kumar, P., & Variable, D. C. (2012). Micromachining with ECDM:   research potentials and experimental investigations. International Journal of   Mechanical and Mechatronics Engineering, 6(1), 340-345.",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "70",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2012). Microstructural characterization of cermet cladding developed through   microwave irradiation. Journal of materials engineering and performance,   21(10), 2165-2172. ",
      "FIELD3": "https://doi.org/10.1007/s11665-012-0142-2 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "71",
      "FIELD2": "Gupta, D., Sharma, A. K.,   Link, G., & Thumm, M. (2012). Investigation on Microstructural   Characterization of Microwave Cladding. Processing and Properties of Advanced   Ceramics and Composites IV by Ceramic Transactions, 234, 133-143. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "72",
      "FIELD2": "Jawalkar, C. S., Sharma, A.   K., & Kumar, P. (2011). Experimental Investigations On Performance Of   ECDM Using Design Of Experiment Approach. i-Manager's Journal on Mechanical   Engineering, 1(3), 24. (Print ISSN 2230-9055, E-ISSN 2249-0744)",
      "FIELD3": "https://search.proquest.com/openview/59671c11d6764e51b1e9d7c087175b59/1?cbl=2030616&pq-origsite=gscholar",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "73",
      "FIELD2": "Jain, V., Sharma, A. K., &   Kumar, P. (2011). Microdrilling Of Difficult To Cut Materials For MEMS   Applications Using Ultrasonic Micromachining. i-Manager's Journal on   Mechanical Engineering, 1(2), 24. (Print ISSN 2230-9055, E-ISSN 2249-0744)",
      "FIELD3": "https://search.proquest.com/openview/59671c11d6764e51ab23147889cfb80b/1?pq-origsite=gscholar&cbl=2030616",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "74",
      "FIELD2": "Himadri Phukan, A K Sharma,    Impact of Marketing Strategies on Detergent Consumption   A Study of Jorhat   District in Assam , Invertis Journal of Management, Vol. 3, No. 2 (2011), pp. 23 40. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "75",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2011). Investigation on sliding wear performance of WC10Co2Ni cladding   developed through microwave irradiation. Wear, 271(9), 1642-1650. ",
      "FIELD3": "https://doi.org/10.1016/j.wear.2010.12.037 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "76",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2011). Microwave cladding: a new surface engineering technique for   developing uniform microstructure. i-manager's Journal on Mechanical   Engineering, 1(2), 17-23. (Print ISSN 2230-9055, E-ISSN 2249-0744)",
      "FIELD3": "https://doi.org/10.26634/jme.1.2.1403",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "77",
      "FIELD2": "Dheeraj Gupta, A K Sharma,    Development and Characterisation of Ni based Microwave Cladding , International Journal of Applied Engineering Research, Vol.6, No.5 (2011), pp.569 577. (ISSN 09734562)",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "78",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2011). Development and microstructural characterization of microwave   cladding on austenitic stainless steel. Surface and Coatings Technology,   205(21), 5147-5155. ",
      "FIELD3": "https://doi.org/10.1016/j.surfcoat.2011.05.018",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "79",
      "FIELD2": "Jain, V., Sharma, A. K., &   Kumar, P. (2011). Recent developments and research issues in microultrasonic   machining. ISRN Mechanical Engineering, Vol. 2011, Article ID 413231, 15   pages, 2011. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "80",
      "FIELD2": "Singh, I., Bajpai, P. K.,   Malik, D., Sharma, A. K., & Kumar, P. (2011). Feasibility study on   microwave joining of green composites. Akademeia, 1(1), 1-6. ",
      "FIELD3": "http://www.akademeia.ca/index.php/main/article/viewArticle/16",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "81",
      "FIELD2": "Gupta, D., & Sharma, A. K.   (2012). Copper coating on austenitic stainless steel using microwave hybrid   heating. Proceedings of the Institution of Mechanical Engineers, Part E:   Journal of Process Mechanical Engineering, 226(2), 132-141. ",
      "FIELD3": "https://doi.org/10.1177/0954408911414652 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "82",
      "FIELD2": "Srinath, M. S., Sharma, A. K.,   & Kumar, P. (2011). Investigation on microstructural and mechanical   properties of microwave processed dissimilar joints. Journal of Manufacturing   Processes, 13(2), 141-146. ",
      "FIELD3": "https://doi.org/10.1016/j.jmapro.2011.03.001 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "83",
      "FIELD2": "Srinath, M. S., Sharma, A. K.,   & Kumar, P. (2011). A novel route for joining of austenitic stainless   steel (SS-316) using microwave energy. Proceedings of the Institution of   Mechanical Engineers, Part B: Journal of Engineering Manufacture, 225(7), 1083-1091. ",
      "FIELD3": "https://doi.org/10.1177/2041297510393451",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "84",
      "FIELD2": "Srinath, M. S., Sharma, A. K.,   & Kumar, P. (2011). A new approach to joining of bulk copper using   microwave energy. Materials & Design, 32(5), 2685-2694. ",
      "FIELD3": "https://doi.org/10.1016/j.matdes.2011.01.023 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "85",
      "FIELD2": "Srinath, M. S., Sharma, A. K.,   & Kumar, P. (2010). Microwave processing of metallic joints and their   characterisation. i-Manager's Journal on Mechanical Engineering, 1(1), 21-25.   (Print ISSN 2230-9055, E-ISSN 2249-0744)",
      "FIELD3": "https://search.proquest.com/openview/59671c11d6764e51740e86f67baecde8/1?pq-origsite=gscholar&cbl=2030616",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "86",
      "FIELD2": "Rajesha, S., Venkatesh, G.,   Sharma, A. K., & Kumar, P. (2010). Performance study of a natural polymer   based media for abrasive flow machining. Indian Journal of Engineering and   Materials Sciences (IJEMS), 17(6), 407-413. ",
      "FIELD3": "http://nopr.niscair.res.in/handle/123456789/10867",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "87",
      "FIELD2": "Rajesha, S., Sharma, A. K.,   & Kumar, P. (2012). On electro discharge machining of Inconel 718 with   hollow tool. Journal of materials engineering and performance, 21(6),   882-891. ",
      "FIELD3": "https://doi.org/10.1007/s11665-011-9962-8",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "88",
      "FIELD2": "Rajesha S., A. K. Sharma and   Pradeep Kumar,  Optimization of Process Parameters of WEDM While Machining   Inconel 718 Using Taguchi s Orthogonal Array , International   Journal of Engineering, Technology & Management (ISSN:   0974-9535) (Accepted)",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "89",
      "FIELD2": "Rajesha S., A. K. Sharma and   Pradeep Kumar,  An Approach to Optimization of Process Parameters While   EDMing Inconel 718 Using Taguchi s Orthogonal Array ,   International Journal of Production and Quality Engineering, Vol. 1, No. 2, (2011), 19-26. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "90",
      "FIELD2": "Rajesha, S., Apurbba Kumar   Sharma and P. Kumar,  Influence of Process parameters in Centrifugal Force   Assisted Abrasive Flow Machining , International Journal   of Engineering Research and Technology, Vol. 3,   No. 3, 2010, 653   663. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "91",
      "FIELD2": "RA, K., & AK, S. (2011).   N-Period Dynamic Deterministic Inventory Model for Perishable Goods. The IUP   Journal of Operations Management, Vol. X, No. 1,(2011), pp. 7-17. ",
      "FIELD3": "http://content.ebscohost.com/ContentServer.asp?T=P&P=AN&K=59337830&S=R&D=bsu&EbscoContent=dGJyMNHX8kSep7U4zOX0OLCmr1CeqLFSsKq4TK6WxWXS&ContentCustomer=dGJyMPGsr023rK9KuePfgeyx44Dt6fIA",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "92",
      "FIELD2": "Jawalkara, C. S., Sharmab, A.   K., & Kumarc, P. Electric Discharge Machining: Variants, Hybridization   and Research Potentials. International Journal of Production and Quality   Engineering, 2(1), 27-41. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "93",
      "FIELD2": "A. K Sharma, S. Rajesha, Uday   Divekar, Dinesh Kumar, Anish Sachdeva.  A Fuzzy Approach to Selection of   Optimum Maintenance Strategy   A Case based Analysis , Industrial   Engineering Journal, Vol. II, No. 14, (2010),   4 11. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "94",
      "FIELD2": "Venkata Subbarayudu Pesala, A.   K. Sharma, P. Groche and M. S. C. Okan Goertan,  ECAS: A New Technique to   Produce Ultra Fine Grained Materials , Industrial   Engineering Journal, Vol. II, No. 12, (2010),  26 29. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "95",
      "FIELD2": "Sharma, A. K., &   Krishnamurthy, R. (2010). Sliding wear characterization of microwave-glazed   plasma-sprayed ceramic composites. Proceedings of the Institution of   Mechanical Engineers, Part J: Journal of Engineering Tribology, 224(5),   497-511. ",
      "FIELD3": "https://doi.org/10.1243/13506501JET692",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "96",
      "FIELD2": "Kumar, S., Gupta, D. S.,   Singh, I., & Sharma, A. (2010). Behavior of Kevlar/epoxy composite plates   under ballistic impact. Journal of Reinforced Plastics and Composites,   29(13), 2048-2064. ",
      "FIELD3": "https://doi.org/10.1177/0731684409343727",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "97",
      "FIELD2": "D.S. Gupta, B.K. Mishra, I.   Singh and A. K. Sharma,  Damage Behavior of Polymer Matrix Composite Plates   under Low Velocity Impact: An FE Approach , International   Journal of Manufacturing Science and Engineering,   1 (1), 21   24, 2010. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "98",
      "FIELD2": "Sharma, A. K., &   Krishnamurthy, R. (2009). Flexural Response Characterisation of Plasma   Sprayed and Microwave Glazed Ceramic Composite Coatings. RSM International   Journal of Engineering, Technology and Management, 1, 7-17. ",
      "FIELD3": "http://www.rmkec.ac.in/journal/2009/1/rsmjournal.pdf#page=8",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "99",
      "FIELD2": "Reddy, M. K., Sharma, A. K.,   & Kumar, P. (2008). Some aspects of centrifugal force assisted abrasive   flow machining of 2014 Al alloy. Proceedings of the Institution of Mechanical   Engineers, Part B: Journal of Engineering Manufacture, 222(7), 773-783. ",
      "FIELD3": "https://doi.org/10.1243/09544054JEM1018 ",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "100",
      "FIELD2": "Sharma, A. K., &   Krishnamurthy, R. (2002). Microwave processing of sprayed alumina composite   for enhanced performance. Journal of the European Ceramic Society, 22(16),   2849-2860. ",
      "FIELD3": "https://doi.org/10.1016/S0955-2219(02)00051-1",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "101",
      "FIELD2": "Vijayakumar, K., Sharma, A.   K., Mayuram, M. M., & Krishnamurthy, R. (2002). Response of   plasma-sprayed alumina titania ceramic composite to high-frequency impact   loading. Materials letters, 54(5), 403-413. ",
      "FIELD3": "https://doi.org/10.1016/S0167-577X(01)00601-2",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "102",
      "FIELD2": "Sharma, A. K., &   Krishnamurthy, R. (2002). Microwave glazing of alumina-titania ceramic   composites for enhanced properties. In Key Engineering Materials (Vol. 206,   pp. 579-582). ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "103",
      "FIELD2": "Sharma, A. K., Aravindhan, S.,   & Krishnamurthy, R. (2001). Microwave glazing of alumina titania ceramic   composite coatings. Materials Letters, 50(5), 295-301. ",
      "FIELD3": "https://doi.org/10.1016/S0167-577X(01)00243-9",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "104",
      "FIELD2": "Apurbba Kr. Sharma, K. Vijayakumar and R. Krishnamurthy,  Acoustic emission   response of thermal spray deposited ceramic composite , Journal of the Acoustic Society of India, 29 (2-4), 283-295, 2001. ",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    },
    {
      "FIELD1": "",
      "FIELD2": "",
      "FIELD3": "",
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      
    }
   ]


 const data2 = [
    {
      "FIELD1": "Kumar,   G., & Sharma, A. K. Defect Minimization in Microwave Drilling of Glass   Using Dielectrics."
    },
    {
      "FIELD1": "Sreehari,   D., & Sharma, A. K. (2017, July). Simulation studies of different   Si-microchannels for heat transfer applications. Proceedings of International   Conference on Manufacturing Technology and Simulation (pp. 117-120). IIT   Madras, Chennai (Accepted)."
    },
    {
      "FIELD1": "Mishra,   R. R., & Sharma, A. K. (2017, June). Microstructure evolution in AA 7039   alloy cast developed using sand casting and in-situ microwave casting. XVIII   International UIE-Congress (Electrotechnologies for Material Processing) (pp.   267-272). Hannover, Germany."
    },
    {
      "FIELD1": "Sreehari,   D., & Sharma, A. K. (2016,   December). Influence of process parameters on surface roughness in 3D silicon   microchannels fabricated by micro-USM. Proceedings of International   Conference on Design and Manufacturing (pp.189-192). IIITDM, Kancheepuram."
    },
    {
      "FIELD1": "Mishra,   R. R., & Sharma, A. K. (2016, December). Effect of microwave power   on properties of in-situ cast of aluminium at 2.45 GHz. Proceedings of the 6th International &   27th All India Manufacturing Technology, Design and Research Conference   (AIMTDR-2016). College of engineering, Pune."
    },
    {
      "FIELD1": "Lautre,   N. K., Sharma, A. K, Kumar, P., & Das, S. (2016, December).   Comparison of Microwave Assisted and   Conventional Method for Drilling of Perspex. Proceedings of the 6th   International & 27th All India Manufacturing Technology, Design and   Research Conference (AIMTDR-2016) . College of engineering, Pune."
    },
    {
      "FIELD1": "Goud,   M., & Sharma, A. K. (2016, December). Analysis of Material Removal and   Radial Overcut during Micro-drilling of Soda Lime Glass   using Electrochemical Discharge Machining   (ECDM). Proceedings of the 6th International & 27th All India   Manufacturing Technology, Design and Research Conference (AIMTDR-2016). College of engineering, Pune.    "
    },
    {
      "FIELD1": "Gamit,   D., & Sharma, A. K. (2016, March). Joining of metallic pipes using   microwave hybrid heating at 2.45 GHz. Proceedings of the International   Conference on recent trends in engineering and material sciences (ICEMS-2016). Jaipur National University, Jaipur."
    },
    {
      "FIELD1": "Zafar,   S., & Sharma, A. K. (2016, February). FE Simulation of Microwave Heating   of Characteristically Different Materials. Proceedings of International   Conference on Latest Developments in Material, Manufacturing and Quality   Control. Giani Zail Singh College of Engineering &   Technology, Bathinda."
    },
    {
      "FIELD1": "Zafar,   S., & Sharma, A. K. (2015, September). An ANN Approach for Prediction of   Wear Behaviour of WC-12Co Nanostructured Microwave Clad. Proceedings of   International Tribology Conference-2015. Tokyo   University of Science, Tokyo."
    },
    {
      "FIELD1": "Zafar,   S., & Sharma, A. K. (2015, June). Response of Nanometric WC-12Co   Microwave Clads to Abrasive Wear. Proceedings of 29th International   Conference on Surface Modification Technologies (pp. 127-134). Technical   University of Denmark, Copenhagen."
    },
    {
      "FIELD1": "Mishra,   R. R., Sharma, A. K., Rajesha, S., Gupta, A., Kumar, V., & Kumar,   V.(2015, March). Microwave Casting: Exploring a New Approach for Casting Bulk   Metals with Microwave Energy. International conference CETCME-2015 . NIET, Greater Noida."
    },
    {
      "FIELD1": "Mishra,   R . R. & Sharma, A. K. (2015,). A new in-situ casting technique   using microwave energy at 2.45 GHz. Proc. of the India International   Science Festival- Young Scientists   Meet, DST, Government of India,   Design 58 (pp.1  7). IIT Delhi,   New Delhi."
    },
    {
      "FIELD1": "Mishra,   R. R., Rajesha, S., & Sharma,   A. K. (2014, December). Investigation on Recast Layer Thickness and Hardness   of EDM Processed Al-7075 Metal Matrix Composite. Proceeding of International   Conference PFAM-XXIII (pp. 540-545).IIT Roorkee, Roorkee."
    },
    {
      "FIELD1": "Lautre,   N. K., Sharma, A.K., Kumar, P., & Das, P.(2014, December). Performance of   Monopole Concentrator during Microwave Drilling of Perspex. Proceedings of   the AIMTDR Conference . IIT Guwahati, Guwahati."
    },
    {
      "FIELD1": "Lautre,   N.K., Sharma, A. K., Kumar, P., & Das, S.(2014, December). Defect   Investigation in Microwave Drilling of Perspex at 2.45 GHz. Proceedings of the International Conference on Processing and   Fabrication of Advanced Materials (PFAM-XXIII).   IIT Roorkee,Roorkee."
    },
    {
      "FIELD1": "Lautre,   N.K., Sharma, A.K., & Kumar, P. (2014, June). Distortions in hole and   tool during microwave drilling of perspex in a customized applicator. IEEE   MTT-S International Microwave Symposium (IMS)(pp. 1-3).Tompa Bay, Florida"
    },
    {
      "FIELD1": "Venkatesh,   G., Singh, T., Sharma, A. K., & Dvivedi, A. (2014, December).A fuzzy logic approach in prediction of   responses while finishing microchannels using abrasive flow machining.   Proceedings of the International Conference on Processing and Fabrication of   Advanced Materials (PFAM-XXIII)(pp. 374-383). IIT Roorkee, Roorkee."
    },
    {
      "FIELD1": "Sutar,   M.K., Pathak, P.M., Sharma, A. K., Mehta, N. K., & Gupta, V. K.(2012, February). Bond Graph   Modelling of In Vivo Robot for Biopsy. International Conference on   Mathematical Modelling (MATHMOD 2012)(pp. 421-426). Vienna, Austria."
    },
    {
      "FIELD1": "Sutar,   M.K., Garg, A., Vikram, C.S., Gupta, S., Pathak, P.M., Sharma, A. K., Mehta, N. K., & Gupta, V.   K.(2012, January). Design of In- Vivo Robot for Biopsy. International   Conference on MICROACTUATORS AND MICROMECHANISMS (MAMM-2012). CSIR-CMERI, Durgapur"
    },
    {
      "FIELD1": "Sutar,   M. K., Pathak, P. M., Mehta, N. K., & Sharma, A. K. (2013, December). Trajectory Control of a 3-link Planar   Manipulator using Virtual Link Based Controller. 1st International and 16th National Conference   on Machines and Mechanisms (iNaCoMM 2013)(pp.   124-131). IIT Roorkee, Roorkee"
    },
    {
      "FIELD1": "Mishra,   R.R., Rajesha, S., & Sharma, A. K. (2014, February). Microwave sintering   of pure metal powders    A review. International conference ITMMMAAA-2014.   JNU, New Delhi (India)."
    },
    {
      "FIELD1": "Mishra,   R. R., Rajesha, S., & Sharma, A. K. (2014, April). Design and analysis of   carbon fiber and PEEK sandwich composite. Proceeding of   International Conference on Emerging   Materials and Applications (ICEMA - 2014). Roorkee."
    },
    {
      "FIELD1": "Srinath   M.S., Sharma, A. K., & Kumar, P. (2013, October).   Theoritical and experimental analysis of microwave joining of stainless   steel. Materials Science & Technology Conference and Exhibition (MS&T     13). Montreal, Canada."
    },
    {
      "FIELD1": "Lautre, N.K., Sharma, A.K., & Kumar, P. (2013, October). Microwave drilling with Litz   wire using a domestic applicator. International Conference on Smart   Technology for Mechanical Engineering (STME -2013)   (pp. 797-802). New Delhi, India."
    },
    {
      "FIELD1": "Mali,   A. A., Bansal, A., Sharma, A.K., & Singh, I. (2013, October). Simulation of microwave heating of   materials with different dielectric properties. International Conference on   Smart Technology for Mechanical Engineering (STME -2013)(pp. 821-824).New Delhi, India."
    },
    {
      "FIELD1": "Cheema,   M.S., Dvivedi, A., & Sharma, A. K. (2013, October). On material removal   mechanism by single particle impingement in ultrasonic machining.   International Conference on Smart Technology for Mechanical Engineering (STME   -2013)( pp. 886-889). New   Delhi, India.  "
    },
    {
      "FIELD1": "Cheema   M.S., Dvivedi, A., & Sharma, A. K. (2013, October). An ultrasonic   micromachining setup for machining of 3D geometries. International Conference   on Research and Innovations in Mechanical Engineering (ICRIME-2013). Guru Nanak Dev Engineering College, Ludhiana."
    },
    {
      "FIELD1": "Venkatesh,   G., Singh, T., Sharma, A. K., & Dvivedi, A. (2013, October). Finishing of Microchannels using   Abrasive Flow Machining. International Conference on Research and Innovations   in Mechanical Engineering (ICRIME-2013)(pp.). Guru Nanak Dev Engineering College, Ludhiana. (Best Paper Award)"
    },
    {
      "FIELD1": "Jawalkar, C. S., Kumar, P., Sharma, A. K., & Ansari, F. (2013, June).   Experimental investigations on micro channeling through ecdm using different   electrolytes. Proceedings of the ASME 2013 International Manufacturing   Science and Engineering Conference (MSEC2013).   Madison, Wisconsin (USA)."
    },
    {
      "FIELD1": "Jain,   V., Sharma, A. & Kumar, P. (2012,). Fabrication of Microchannels for   Micro-Fluidic Applications Using High Frequency Micromachining on an   Amorphous Material. AIP Conference Proceedings. American Institute of   Physics, Ste. 1 NO 1 Melville NY 11747-4502 United States"
    },
    {
      "FIELD1": "Bansal,   A. & Sharma, A. K. (2012, November). Investigations on microstructural   characterization of microwave composite clads on austenitic stainless steel.   Proc. of The 2nd   Annual International Conference on Materials Science, Metal &   Manufacturing (M3 2012)( pp.   108  113). Singapore."
    },
    {
      "FIELD1": "Jawalkar,   C.S., Kumar, P., &   Sharma, A. K. (2012, June).On mechanism of   material removal and parametric influence while machining sodalime glass   using Electro-Chemical Discharge Machining (ECDM). 4th International and 25th AIMTDR Conference   (pp. 440  446). Jadavpur University, Kolkata."
    },
    {
      "FIELD1": "Venkatesh,   G., Sharma, A. K., & Kumar, P. (2012,June). Influence of Process Parameters on performance of Natural   Polymer Media for Abrasive Flow Machining of Brass Alloy. 4th International and 25th AIMTDR Conference (pp. 577  582). Jadavpur University,Kolkata."
    },
    {
      "FIELD1": "Jain,   V., Sharma, A. K., & Kumar, P. (2012, June). Fabrication of Microchannels using layer-by-layer Machining in   Micro USM. 4th International and 25th AIMTDR Conference (pp. 1344  1348). Jadavpur   University,Kolkata."
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A. K., &   Kumar, P. (2012, June). Optimisation of Process Parameters for the   development of Copper Joints using Microwave Irradiation. 4th International and 25th AIMTDR Conference . Jadavpur   University,Kolkata.  "
    },
    {
      "FIELD1": "Jain,   V., Sharma, A.K., & Kumar, P. (2011, December). Investigation on Micro   Ultrasonic Drilling of Glass Using     Taguchi Approach. International Conference Advance Material and   Processing  ICAMP 2011 .Chennai."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2011, December). Microwave Cladding: An Emerging   Hardfacing Technique. International Conference Advance Material and   Processing   ICAMP 2011 .Chennai."
    },
    {
      "FIELD1": "Jawalkar,   C. S., Sharma, A. K., Kumar, P. (2012, January). Micromachining with ECDM :   Research potentials & experimental investigations(ICMIME). Zurich,   Switzerland."
    },
    {
      "FIELD1": "Jain,   V., Sharma, A. K., & Kumar,   P. (2012, March). Fabrication of Microchannels for Micro-fluidic Applications   using High Frequency Micromachining on an amorphous material. TMS 2012 . Florida. (Accepted)"
    },
    {
      "FIELD1": "Jawalkar,   C.S., Sharma, A.K., & Kumar, P. (2011, December). A review on EDM, ECDM   and its variant processes. ICAM 2011 . Agra, India."
    },
    {
      "FIELD1": "Srinath   M.S., Suryanarayana, M. P.,   Sharma, A. K., & Kumar, P. (2011, December). Finite Elemental Analysis of Microwave Joining of Bulk Metals.   Proc. of the International Conference on Computational Methods in   Manufacturing (ICCMM2011).IIT Guwahati, India."
    },
    {
      "FIELD1": "Bajpai,   P. K., Malik, D., Singh, I.,   Madaan,   J., & Sharma, A. K. (2011, December). Investigation for Microwave Joining   of Green Composites using Finite Element Approach. Proc. of the International   Conference on Computational Methods in Manufacturing (ICCMM2011). IIT Guwahati, India."
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A. K., &   Kumar, P. (2011, February). Investigations on Interface Powder Layer during   Joining of Metallic Materials. Proc. Intl. Conference and Exhibition on   Powder Metallurgy for Automotive and Engineering Industries PMAI-2011. Pune.  "
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2011, June). On Microstructural Investigation of   Microwave Cladding. International Conference on Materials for Advanced   Technologies (ICMAT).Singapore."
    },
    {
      "FIELD1": "Gupta,   D, & Sharma, A. K. (2010, February). Characterization Of Microwave   Heating Induced Copper Coating On Graphite Substrate. International   conference on recent trends in materials and characterization (RETMAC 2010). NIT Surathkal,(India)."
    },
    {
      "FIELD1": "Gupta,   D., Sharma, A. K., Bhovi, P. M.(2011, February). Structure-Property   Correlation in Microwave Cladding. E-proceeding of Second international   conference on Materials for the Future (ICMF 2011).   Thrissur, India. (Best   Paper Award)"
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K.(2011, October). Investigation on Microstructural   Characterization of Microwave Cladding. Materials Science &   Technology   Conference & Exhibition   . Columbus, Ohio (USA)."
    },
    {
      "FIELD1": "Suryanarayana,   M. P., Srinath, M. S., Sharma, A. K. & Kumar, P. (2011, March). An FEM   approach to analysis of microwave heating of alumina in multi-mode   applicator. Proc. International Conference on Mathematical Modelling and   Applications to Industrial Problems . NIT Calicut, India."
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A. K., Kumar,   P. (2011, October). Comparative study of Microwave welded and TIG welded   stainless steel (SS-316) Joints. Proc. (MS&T-2011) Materials Science   & Technology . Columbus, Ohio."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A K.   (2011, January). On development and performance of microwave induced   metal-ceramic composite cladding. Processing and Fabrication of Advanced   Materials (PFAM  XIX)(pp. 90-101).Auckland, NZ."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2011, April). Investigation On Sliding Wear   Performance Of WC10Co2Ni Cladding Developed Through Microwave Irradiation.   International Conference on Wear of Materials .   Philadelphia, USA.  "
    },
    {
      "FIELD1": "Jain,   V., Sharma, A. K., &   Kumar, P. (2011, February). Investigation on tool wear in micro ultrasonic   machining. 2nd   International Conference on Mechanical, Industrial, and Manufacturing   Technologies (MIMT 2011). Singapore.  "
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A. K., Kumar, P. (2010, November). Microstructural   Investigations on Microwave Induced Dissimilar Joints. Intl. conference on AMMMT 2010 . Tumkur, India."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K.   (2011, March). Development Of Copper Coating On Austenitic Stainless Steel   Through Microwave Hybrid Heating. TMS Annual Meeting & Exhibition. San Diego."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2011, ). Development Of Metallic Coating On Metallic   Substrate Using Electromagnetic Radiation And Their Characterization.   International Conference on Emerging Trends In Mechanical Engineering   (ICETME)( pp.967    971).   Thapar, India."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2010, December). Development of erosion resistant   cladding on austenitic stainless steel through microwave heating. 3rd   International & 24th AIMTDR (All India Manufacturing Technology, Design   and Research) Conference (pp. 1029-1033). Visakhapatnam, India."
    },
    {
      "FIELD1": "Rajesha,   S., Patnaik, P. K., Sharma, A. K., & Kumar, P. (2010, December). Surface   Integrity Evaluation of Electro Discharge Machined Inconel. 3rd International   & 24th AIMTDR (All India Manufacturing Technology, Design and Research)   Conference (pp.259  264). Visakhapatnam, India."
    },
    {
      "FIELD1": "Srinath,   M. S.,Kumar, C. S., Sharma, A. K., & Kumar, P. (2010, December) Joining   of Copper through Microwave Energy. 3rd International   & 24th AIMTDR (All India Manufacturing Technology, Design and Research)   Conference (pp. 467   471). Visakhapatnam, India. (Poster   Proceedings)."
    },
    {
      "FIELD1": "Venkatesh,   G., Rajesha, S., Sharma, A. K., & Kumar, P. (2010, December). Performance   Evaluation of a Newly Developed Media for AFM Using Taguchi  s Orthogonal   Arrays. 3rd International & 24th AIMTDR (All India Manufacturing   Technology, Design and Research) Conference (pp. 1187  1192). Visakhapatnam,   India.  "
    },
    {
      "FIELD1": "Venkatasubbarayudu,   P., Sharma, A. K., Groche, P., & Goertan, O.(2010,   December). Prediction of Forces in a New Severe   Plastic Deformation (SPD) Process. 3rd International & 24th AIMTDR (All   India Manufacturing Technology, Design and Research) Conference (pp.965  969).   Visakhapatnam, India."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2010). Microwave Processing of   Metallic Materials: Some Developments at IIT Roorkee. National Symposium on   Microwave Processing of Materials (NSMWP). IIT   Delhi, New Delhi (India)."
    },
    {
      "FIELD1": "Rajesha,   S., Sharma, A. K., & Kumar, P. (2010, December). Influence of Process   Parameters on Metal Removal Rate while EDMing Inconel 718. 2nd International   Conference on Production and Industrial Engineering (CPIE 2010) (pp. 733    737). Jalandhar, India."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K. (2010, December). A New Metallic Deposition Process   using 2.45GHz Electromagnetic Radiation. Proceeding of International   conference on Production and Industrial Engineering (CPIE 2010)( pp .1644-1648). Jalandhar, India."
    },
    {
      "FIELD1": "Jawalkar,   C.S., Walia, R. S., Sharma, A. K, & Kumar, P. (2010, December). Surface   Finishing of 1100-0 Aluminum specimens using Roller Burnishing. International   Conference on Production and Industrial Engineering (CPIE-2010) (pp.   738-743). Jalandhar, India."
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A.   K., Kumar, P. (2011, March). A Novel Method for Joining of Stainless Steel   (SS-316) through Microwave Energy. 2011 TMS Annual Meeting & Exhibition . San Diego, USA."
    },
    {
      "FIELD1": "Rajesha,   S., Sharma, A. K., & Kumar,   P. (2011, March). Some Studies On Performance of A Natural Polymer Media for   Abrasive Flow Machining. 2011 TMS Annual Meeting & Exhibition . San Diego, USA."
    },
    {
      "FIELD1": "Rajesha,   S. Sharma, A. K., & Kumar, P. (2010, July). Some Aspects of Surface   Integrity Study of Electro Discharge Machined Inconel 718. Proceedings of the   36th International MATADOR Conference (pp. 439    444). The University of   Manchester, United Kingdom.  "
    },
    {
      "FIELD1": "Rajesha,   S., Sharma, A. K., Kumar, P.   (2010, May). Effect of Process Parameters on Performance of WEDM while   Machining Inconel 718.Proceeding :International Conference on Frontiers in   Mechanical Engineering (FIME-2010)( pp 162-167). NITK, Surathkal, India."
    },
    {
      "FIELD1": "Rajesha,   S., Sharma, A. K., & Kumar, P. (2010, May). Development and Performance   Evaluation of Alternative Media for Abrasive Flow Machining. Proceedings of   the International Conference on Frontiers in Mechanical Engineering   (FIME-2010)( pp 168    173).   NITK, Surathkal, India."
    },
    {
      "FIELD1": "Gupta,   D., & Sharma, A. K.   (2010, May). A green approach to development and characterization of thin   copper coating on austenitic stainless steel. Proceedings of the   International Conference on Frontiers in Mechanical Engineering (FIME-2010)( pp. 439    444). NITK, Surathkal,   India. (Best Paper Award)"
    },
    {
      "FIELD1": "Srinath,   M.S., Sharma, A. K., & Kumar, P. (2010, May). Microwave welding of SS-316   and its characterisation. Proceedings of the International Conference on   Frontiers in Mechanical Engineering (FIME-2010) (pp. 150  155). NITK,   Surathkal, India."
    },
    {
      "FIELD1": "Srinath,   M S., Kumar, C. S., Sharma, A. K., & Kumar, P. (2010, February). Processing of Copper through   Microwaves: Developments at IIT Roorkee. International conference on Recent Trends in Materials and   Characterization (RETMAC-2010)( pp169    175). NITK, Surathkal, India."
    },
    {
      "FIELD1": "Rajesha,   S., Sharma, A. K., Kumar, P.   (2010, February). Influence of Parameters on Process Performance During   Electro Discharge Machining of Inconel-718. Supplementary Proc., Volume 3:   TMS Annual Meeting 2010 (pp. 841    848). Seattle, USA.  "
    },
    {
      "FIELD1": "Srinath,   M. S., Kumar, C. S., & Sharma, A. K., & Kumar, P. (2010, February).   Processing of Copper through Microwaves: Developments at IIT Roorkee. Proc.   of the International conference RETMAC 2010 . Surathkal,   India."
    },
    {
      "FIELD1": "Joy,   P. M., Sharma, A. K., &   Jain, N. K. (2009, March). Design of Experiments for Electrochemical Honing   of Helical Gear. Proc. of the International Conference on Emerging Research   and Advances in Mechanical Engineering (pp. 874  878). Chennai, India.  "
    },
    {
      "FIELD1": "Devekar,   U., Kumar, D., Sharma, A. K., & Sachdeva, A. (2008, December). An Optimum   maintenance strategy selection using fuzzy approach. Proc. of the 2nd International &   23rd   AIMTDR Conference (pp. 1127  1132). Chennai."
    },
    {
      "FIELD1": "Lakavath,   R. N., Jain, N. K., & Sharma, A. K. (2008, December). Investigation on   Precision Finishing of Spur Gears by Electrochemical Honing. Proc. of the 2nd International &   23rd   AIMTDR Conference (pp. 509  514). Chennai."
    },
    {
      "FIELD1": "Gupta,   D. S., Mishra, B. K., Singh, I., & Sharma, A. K. (2007, December). Damage   Behavior of Polymer Matrix Composite Plates under Low Velocity Impact: An FE   Approach. Proceedings of International and INCCOM-6 Conference, Future Trends   in Composite Materials and Processing (pp. 292-296). IIT Kanpur, Kanpur."
    },
    {
      "FIELD1": "Sharma,   A. K., & and Krishnamurthy, R. (2006, December). Structure property co-relation in microwave glazed ceramic   composite coatings. Proceedings of The First International and 22nd All India   Manufacturing Technology, Design and Research Conference (pp. 629-634). IIT   Roorkee, Roorkee.  "
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (2004, December). Performance enhancement of   plasma sprayed ceramic composite coatings through microwave glazing.   Indo-Japan Conference on Damage Tolerant Design and Materials DTDM 2004   (pp.316-320). Chennai,   India.  "
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (2003, August). Microwave glazing of plasma sprayed   alumina-titania composites for enhanced resistance to high frequency impact   loading. Proc. of the International Conference on CAD, CAM, Robotics and   Autonomous Factories (INCARF-2003). New Delhi, India."
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (2002, July). Response characterisation of   microwave glazed alumina-titania spray deposits under sliding and erosion   environment. 6th   Biennial Conference on Engineering Systems Design and Analysis. Istanbul, Turkey."
    },
    {
      "FIELD1": "Sharma,   A. K., Vijayakumar, K.,   & Krishnamurthy, R. (2002, March). Evaluation of plasma deposited   alumina-titania ceramic composite coatings. International Thermal Spray   Conference and Exposition ITSC 2002. D  sseldorf, Germany.  "
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (2002). Response   characterisation of microwave glazed plasma spray deposited ceramic composite   coatings.   ASME/JSME International   Conference on Materials and Processing . Honululu   (USA).  "
    },
    {
      "FIELD1": "Vijayakumar,   K., Sharma, A. K., Mayuram, M. M. &   Krishnamurthy, R. (2002, January). Response of alumina-titania (AT-13)   ceramic composite deposits to high frequency impact loading. The 26th Annual International   Conference on Advanced Ceramics & Composites .   Cocoa Beach, Florida, USA.  "
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy,   R. (2001, September). Microwave glazing of alumina-titania ceramic composites   for enhanced properties. Proceedings of 7th ECERS Conference and Exhibition of the European Ceramic   Society   ECerS VII (pp.579-582). Belgium,     Brussels."
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy,   R. (2001, September). Response of plasma sprayed ceramic composites to   sliding contact. 2nd World Tribology Congress .   Vienna, Austria."
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (2001, September). Microwave processing of   alumina-titania ceramic composite coating. International Conference on   Microwave and High frequency Heating . Bayreuth,   Germany."
    },
    {
      "FIELD1": "Sharma,   A. K., & Krishnamurthy, R. (1996, February). Monitoring of grinding wheel   wear through acoustic emission  , Proc. of the   International Conference on Industrial Tribology-   TRIBO-TECH (pp.163-173). Jamshedpur, India."
    }
   ]

   export default class about extends React.Component{


    

    render(){
        return (

            <>
                <div className = "Papers"> 

                    <center><h1>Journal Publications</h1></center>

                        <table className = "table    table-responsive  table-borderless" >

                             
                             
                                {data.map((update , index) =>{
                                    return  <tr key = {update.FIELD1}>                    
                                
                                        <td><a href = {update.FIELD3}> {update.FIELD2} </a></td>
                                    </tr>
                                })}

                        </table>


                    <center><h1>Conference Publications</h1></center>

                       <table className = "table    table-responsive  table-borderless" >

                             
                                                    
                            {data2.map((update , index) =>{
                                return  <tr>                    

                                    <td>  {update.FIELD1}  </td>
                                </tr>
                            })}

                            </table>

                </div>
            </>
        );
    }
}