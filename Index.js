//------Subnet IP  -------------

var ipA = 0;

var ipB = 0;

var ipC = 0;

var ipD = 0;

//------Enter IP --------------

//---En1 . En2  . En3 .En4

var ipEn1 = 0;

var ipEn2 = 0;

var ipEn3 = 0;

var ipEn4 = 0;

//-------IpWild-------------------

var ipWn1 = 0;

var ipWn2 = 0;

var ipWn3 = 0;

var ipWn4 = 0;

//------Network Address------------

var ipNet1 = 0;

var ipNet2 = 0;

var ipNet3 = 0;

var ipNet4 = 0;

// -------BroadCast Adding Bit---------------------------

var ipBr1 = 0;
var ipBr2 = 0;
var ipBr3 = 0;
var ipBr4 = 0;

// -------BroadCast Adding Bit---------------------------

var ipBro1 = 0;
var ipBro2 = 0;
var ipBro3 = 0;
var ipBro4 = 0;

//------Sub and Host -------------------------------------

var ipSub = 0;
var ipHost = 0;

//---------------------------------------------------------
var validateIP = 0;

var rFormat = false;

var sellComm = 0;

var selectLog = 0;

var dropSelect = 0;

//-----------Intermediate Variable-----------

var ipLogic = false;

var goWild = 0;

var goNetwork = 0;

var kase = 0;

var goBroad = 0;

var goSubHost = 0;

var subBits = 0;

var hostBits = 0;

var goUsable = 0;

var netLIP = 0;

var brLIP = 0;

function handleSubmit() {
  const cip = document.getElementById("cip").value;
  const short = document.getElementById("csubnet").value;

  localStorage.setItem("CIP", cip);
  localStorage.setItem("Short", short);
  // localStorage.setItem("Mask", mask)

  var s2 = document.getElementById("csubnet");

  if (s2.value == "32") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 255;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 0;

    subBits = 32;

    hostBits = 0;

    kase = 1;

    dropSelect = 1;
  } else if (s2.value == "31") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 254;
    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 1;

    subBits = 31;

    hostBits = 1;

    kase = 2;
    dropSelect = 1;
  } else if (s2.value == "30") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 252;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 3;

    subBits = 30;

    hostBits = 2;

    kase = 3;
    dropSelect = 1;
  } else if (s2.value == "29") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 248;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 7;

    subBits = 29;

    hostBits = 3;

    kase = 4;
    dropSelect = 1;
  } else if (s2.value == "28") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 240;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 15;

    subBits = 28;

    hostBits = 4;

    kase = 5;
    dropSelect = 1;
  } else if (s2.value == "27") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 224;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 31;

    subBits = 27;

    hostBits = 5;

    kase = 6;
    dropSelect = 1;
  } else if (s2.value == "26") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 192;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 63;

    subBits = 26;

    hostBits = 6;

    kase = 7;
    dropSelect = 1;
  } else if (s2.value == "25") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 128;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 127;

    subBits = 25;

    hostBits = 7;

    kase = 8;
    dropSelect = 1;
  }

  //-------------------------------------------------------------------------------------------------
  else if (s2.value == "24") {
    ipA = 255;

    ipB = 255;

    ipC = 255;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 0;
    ipBr4 = 255;

    subBits = 24;

    hostBits = 8;

    kase = 9;
    dropSelect = 1;
  } else if (s2.value == "23") {
    ipA = 255;

    ipB = 255;

    ipC = 254;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 1;
    ipBr4 = 255;

    subBits = 23;

    hostBits = 9;

    kase = 10;
    dropSelect = 1;
  } else if (s2.value == "22") {
    ipA = 255;

    ipB = 255;

    ipC = 252;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 3;
    ipBr4 = 255;

    subBits = 22;

    hostBits = 10;

    kase = 11;
    dropSelect = 1;
  } else if (s2.value == "21") {
    ipA = 255;

    ipB = 255;

    ipC = 248;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 7;
    ipBr4 = 255;

    subBits = 21;

    hostBits = 11;

    kase = 12;
    dropSelect = 1;
  } else if (s2.value == "20") {
    ipA = 255;

    ipB = 255;

    ipC = 240;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 15;
    ipBr4 = 255;

    subBits = 20;

    hostBits = 12;

    kase = 13;
    dropSelect = 1;
  } else if (s2.value == "19") {
    ipA = 255;

    ipB = 255;

    ipC = 224;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 31;
    ipBr4 = 255;

    subBits = 19;

    hostBits = 13;

    kase = 14;
    dropSelect = 1;
  } else if (s2.value == "18") {
    ipA = 255;

    ipB = 255;

    ipC = 192;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 63;
    ipBr4 = 255;

    subBits = 18;

    hostBits = 14;

    kase = 15;
    dropSelect = 1;
  } else if (s2.value == "17") {
    ipA = 255;

    ipB = 255;

    ipC = 128;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 127;
    ipBr4 = 255;

    subBits = 17;

    hostBits = 15;

    kase = 16;
    dropSelect = 1;
  }

  //----------------------------------------------------------------------------------------------------
  else if (s2.value == "16") {
    ipA = 255;

    ipB = 255;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 0;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 16;

    hostBits = 16;

    kase = 17;
    dropSelect = 1;
  } else if (s2.value == "15") {
    ipA = 255;

    ipB = 254;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 1;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 15;

    hostBits = 17;

    kase = 18;
    dropSelect = 1;
  } else if (s2.value == "14") {
    ipA = 255;

    ipB = 252;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 3;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 14;

    hostBits = 18;

    kase = 19;
    dropSelect = 1;
  } else if (s2.value == "13") {
    ipA = 255;

    ipB = 248;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 7;
    ipBr3 = 255;
    ipBr4 = 255;

    kase = 20;
    dropSelect = 1;

    subBits = 13;

    hostBits = 19;
  } else if (s2.value == "12") {
    ipA = 255;

    ipB = 240;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 15;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 12;

    hostBits = 20;

    kase = 21;
    dropSelect = 1;
  } else if (s2.value == "11") {
    ipA = 255;

    ipB = 224;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 31;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 11;

    hostBits = 21;

    kase = 22;
    dropSelect = 1;
  } else if (s2.value == "10") {
    ipA = 255;

    ipB = 192;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 63;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 10;

    hostBits = 22;

    kase = 23;
    dropSelect = 1;
  } else if (s2.value == "9") {
    ipA = 255;

    ipB = 128;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 127;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 9;

    hostBits = 23;

    kase = 24;
    dropSelect = 1;
  }

  //------------------------------------------------------------------------------------------------------------------
  else if (s2.value == "8") {
    ipA = 255;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 0;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 8;

    hostBits = 24;

    kase = 25;
    dropSelect = 1;
  } else if (s2.value == "7") {
    ipA = 254;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 1;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 7;

    hostBits = 25;

    kase = 26;
    dropSelect = 1;
  } else if (s2.value == "6") {
    ipA = 252;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 3;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 6;

    hostBits = 26;

    kase = 27;
    dropSelect = 1;
  } else if (s2.value == "5") {
    ipA = 248;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 7;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 5;

    hostBits = 27;

    kase = 28;
    dropSelect = 1;
  } else if (s2.value == "4") {
    ipA = 240;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 15;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 4;

    hostBits = 28;

    kase = 29;
    dropSelect = 1;
  } else if (s2.value == "3") {
    ipA = 224;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 31;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 3;

    hostBits = 29;

    kase = 30;
    dropSelect = 1;
  } else if (s2.value == "2") {
    ipA = 192;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 63;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 2;

    hostBits = 30;

    kase = 31;
    dropSelect = 1;
  } else if (s2.value == "1") {
    ipA = 128;

    ipB = 0;

    ipC = 0;

    ipD = 0;

    //-------Value to add for Broad Cast --------------

    ipBr1 = 127;
    ipBr2 = 255;
    ipBr3 = 255;
    ipBr4 = 255;

    subBits = 1;

    hostBits = 31;

    kase = 32;
    dropSelect = 1;
  }

  validateIP = document.getElementById("cip").value;

  // --------------Check Whether the User Enter Enter Correct Format----Check whether User Enter IP Address

  ipLogic = CheckIP(validateIP);
  rFormat = ipLogic[0];

  // If All Conditions is Valid Proceed Calculation

  if (!dropSelect || !rFormat) {
    alert("Please provide a IP address with enougth length.");
    // document.getElementById('error').innerHTML = "You must Select a Subnet Mask and Enter Correct IP format ";

  } else {
    //Move in the Input Value

    ipEn1 = ipLogic[1];
    ipEn2 = ipLogic[2];
    ipEn3 = ipLogic[3];
    ipEn4 = ipLogic[4];

    // Calculate WildCard

    goWild = calWildCard(ipA, ipB, ipC, ipD);

    ipWn1 = goWild[0];
    ipWn2 = goWild[1];
    ipWn3 = goWild[2];
    ipWn4 = goWild[3];

    // Calculate Network Address

    goNetwork = calNetworkAddress(
      ipEn1,
      ipEn2,
      ipEn3,
      ipEn4,
      ipA,
      ipB,
      ipC,
      ipD
    );

    ipNet1 = goNetwork[0];
    ipNet2 = goNetwork[1];
    ipNet3 = goNetwork[2];
    ipNet4 = goNetwork[3];

    //Calculate Broad Cast Address

    goBroad = calBroadcast(ipNet1, ipNet2, ipNet3, ipNet4);

    ipBro1 = goBroad[0];
    ipBro2 = goBroad[1];
    ipBro3 = goBroad[2];
    ipBro4 = goBroad[3];

    // Calculate Number of Subnet and Host

    goSubHost = calHostSub(subBits, hostBits);

    ipSub = goSubHost[0];
    ipHost = goSubHost[1];
    totalHost = goSubHost[2];

    // Calculate Usable IP Range

    goUsable = calIpRange(ipNet4, ipBro4);

    netLIP = goUsable[0];

    brLIP = goUsable[1];

    //decide standart class
    var standartClass = "";
    let result = cip.split(".");
    var q1 = result[0];
    var q2 = result[1];
    var q3 = result[2];
    var q4 = result[3];

    // // IP Address
    // if (q1 <= 126) {
    //   standartClass = "A";
    // } else if (q1 == 127) {
    //   standartClass = "loopback IP";
    // } else if (q1 >= 128 && q1 <= 191) {
    //   standartClass = "B";
    // } else if (q1 >= 192 && q1 <= 223) {
    //   standartClass = "C";
    // } else if (q1 >= 224 && q1 <= 239) {
    //   standartClass = "D (Multicast Address)";
    // } else if (q1 >= 240 && q1 <= 225) {
    //   standartClass = "E (Experimental)";
    // } else {
    //   standartClass = "Out of range";
    // }

    // //Subnet
    // if(ipA == 255 && ipB == 255 && ipC == 255){
    //     standartClass = "C";
    // }else if(ipA == 255 && ipB == 255 && ipC != 255){
    //     standartClass = "B";
    // }else if(ipA == 255 && ipB != 255 && ipC != 255){
    //     standartClass = "A";
    // }

    //get IP Address binaries
    var ipBin = {};
    ipBin[1] = String("00000000" + parseInt(q1, 10).toString(2)).slice(-8);
    ipBin[2] = String("00000000" + parseInt(q2, 10).toString(2)).slice(-8);
    ipBin[3] = String("00000000" + parseInt(q3, 10).toString(2)).slice(-8);
    ipBin[4] = String("00000000" + parseInt(q4, 10).toString(2)).slice(-8);

    //Short
    if (short >= 8 && short < 16) {
      standartClass = "A";
    } else if (short >= 16 && short < 24) {
      standartClass = "B";
    } else if (short >= 24) {
      standartClass = "C";
    }

    //ip type
    var iptype = "";
    if (
      q1 == 10 ||
      (q1 == 172 && q2 >= 16 && q2 <= 31) ||
      (q1 == 192 && q2 == 168)
    ) {
      iptype = "Private";
    } else {
      iptype = "Public";
    }

    //Integer ID
    var ipBins = [ipBin[1] + ipBin[2] + ipBin[3] + ipBin[4]];
    var numBin = String(ipBins);
    let intId = 0;
    // Initializing base value to 1, i.e 2^0
    let base = 1;

    let len = numBin.length;
    for (let d = len - 1; d >= 0; d--) {
      if (numBin[d] == "1") {
        intId += base;
      }
      base = base * 2;
    }

    //netmask
    var mask = short;
    var importantBlock = Math.ceil(mask / 8);
    var importantBlockBinary = ipBin[importantBlock];
    var maskBinaryBlockCount = mask % 8;
    if (maskBinaryBlockCount == 0) importantBlock++;
    var maskBinaryBlock = "";
    var maskBlock = "";
    for (var i = 1; i <= 8; i++) {
      if (maskBinaryBlockCount >= i) {
        maskBinaryBlock += "1";
      } else {
        maskBinaryBlock += "0";
      }
    }
    //convert binary mask block to decimal
    maskBlock = parseInt(maskBinaryBlock, 2);

    //net & broadcast addr
    var netBlockBinary = "";
    var bcBlockBinary = "";
    for (var i = 1; i <= 8; i++) {
      if (maskBinaryBlock.substr(i - 1, 1) == "1") {
        netBlockBinary += importantBlockBinary.substr(i - 1, 1);
        bcBlockBinary += importantBlockBinary.substr(i - 1, 1);
      } else {
        netBlockBinary += "0";
        bcBlockBinary += "1";
      }
    }

    var mask = "";
    var maskBinary = "";
    var net = "";
    var bc = "";
    var netBinary = "";
    var bcBinary = "";
    var rangeA = "";
    var rangeB = "";
    //loop to put whole strings block together
    for (var i = 1; i <= 4; i++) {
      if (importantBlock > i) {
        //blocks before the important block.
        mask += "255";
        maskBinary += "11111111";
        netBinary += ipBin[i];
        bcBinary += ipBin[i];
        net += parseInt(ipBin[i], 2);
        bc += parseInt(ipBin[i], 2);

        if (short >= 8 && short < 16) {
          rangeA += parseInt(ipBin[i], 2);
          rangeB += parseInt(ipBin[i], 2);

        } else if (short >= 16 && short < 24) {
          rangeA += parseInt(ipBin[i], 2);
          rangeB += parseInt(ipBin[i], 2);

        } else if (short >= 24) {
          rangeA += parseInt(ipBin[i], 2);
          rangeB += parseInt(ipBin[i], 2);
        }else {
          rangeA += 1;
          rangeB += parseInt(ipBin[i], 2);
        }


      } else if (importantBlock == i) {
        //the important block.
        mask += maskBlock;
        maskBinary += maskBinaryBlock;
        netBinary += netBlockBinary;
        bcBinary += bcBlockBinary;
        net += parseInt(netBlockBinary, 2);
        bc += parseInt(bcBlockBinary, 2);

        if (short >= 8 && short < 16) {
          rangeA += parseInt(netBlockBinary, 2);
          rangeB += ipBro2;

        } else if (short >= 16 && short < 24) {
          rangeA += parseInt(netBlockBinary, 2);
          rangeB += parseInt(bcBlockBinary, 2) - i + 3;

        } else if (short >= 24) {
          rangeA += parseInt(netBlockBinary, 2) + i - 3;
          rangeB += parseInt(bcBlockBinary, 2) - i + 3;
        }else {
          rangeA += ipNet1;
          rangeB += parseInt(ipBin[i], 2) + 1;
        }

      } else {
        //block after the important block.
        mask += 0;
        maskBinary += "00000000";
        netBinary += "00000000";
        bcBinary += "11111111";
        net += "0";
        bc += "255";

        if (short >= 8 && short < 16) {
          rangeA += 0 + i - 3;
          rangeB += 255 - i + Number(importantBlock) + 1;

        } else if (short >= 16 && short < 24) {
          rangeA += 0 + 1;
          rangeB += 255 - i + 3;

        } else if (short >= 24) {
          rangeA += 0;
          rangeB += 255;
        }
        else {
          if(i == 4) {
            rangeA += ipB + 1;
            rangeB += ipBro4 -1;
          }else {
            rangeA += ipB;
            rangeB += ipBro4;
          }
        }

      }
      //add . separator except the last block
      if (i < 4) {
        mask += ".";
        maskBinary += ".";
        netBinary += ".";
        bcBinary += ".";
        net += ".";
        bc += ".";
        rangeA += ".";
        rangeB += ".";
      }
    }

    //Hex ID
    var ip = intId;
    var hex = new Array();
    var hexes = new Array();
    var str = "";
    var las = "";
    var hexData = 0;

    hexData = ip / 16;

    for (let h = 0; h < 8; h++) {
      str = String(hexData);
      las = str.split(".");
      hexData = las[1];
      hexData /= Math.pow(10, hexData.length);
      hex[h] = hexData * 16;
      hexData = las[0];
      hexData = hexData / 16;
    }

    // hexes = hex;

    //add. separator except the last block

    for (let index = hex.length; index >= 0; index--) {
      switch (hex[index]) {
        case 0:
          hexes.push("0");
          break;
        case 1:
          hexes.push("1");
          break;
        case 2:
          hexes.push("2");
          break;
        case 3:
          hexes.push("3");
          break;
        case 4:
          hexes.push("4");
          break;
        case 5:
          hexes.push("5");
          break;
        case 6:
          hexes.push("6");
          break;
        case 7:
          hexes.push("7");
          break;
        case 8:
          hexes.push("8");
          break;
        case 9:
          hexes.push("9");
          break;
        case 10:
          hexes.push("a");
          break;
        case 11:
          hexes.push("b");
          break;
        case 12:
          hexes.push("c");
          break;
        case 13:
          hexes.push("d");
          break;
        case 14:
          hexes.push("e");
          break;
        case 15:
          hexes.push("f");
          break;
        case 16:
          hexes.push("10");
          break;
        case 17:
          hexes.push("11");
          break;
        case 18:
          hexes.push("12");
          break;
        case 19:
          hexes.push("13");
          break;
        case 20:
          hexes.push("14");
          break;
        case 21:
          hexes.push("15");
          break;
        case 22:
          hexes.push("16");
          break;
        case 23:
          hexes.push("17");
          break;
        case 24:
          hexes.push("18");
          break;
        case 25:
          hexes.push("19");
          break;
        case 26:
          hexes.push("1a");
          break;
        case 27:
          hexes.push("1b");
          break;
        case 28:
          hexes.push("1c");
          break;
        case 29:
          hexes.push("1d");
          break;
        case 30:
          hexes.push("1e");
          break;
        case 40:
          hexes.push("28");
          break;
        case 50:
          hexes.push("32");
          break;
        case 60:
          hexes.push("3c");
          break;
        case 70:
          hexes.push("46");
          break;
        case 80:
          hexes.push("50");
          break;
        case 90:
          hexes.push("5a");
          break;
        case 100:
          hexes.push("64");
          break;
        case 200:
          hexes.push("c8");
          break;
        case 1000:
          hexes.push("3e8");
          break;
        case 2000:
          hexes.push("7d0");
          break;

        default:
          break;
      }

      // if (hex[index] == 12) hexes.push("c");
      // if (hex[index] == 10) hexes.push("a");
      // if (hex[index] == 1) hexes.push("1");
      // if (hex[index] == 4) hexes.push("4");
      // if (hex[index] == 14) hexes.push("e");
      // if (hex[index] == 15) hexes.push("f");
      // if (hex[index] == 6) hexes.push("6");
    }

    localStorage.setItem("A", ipA);
    localStorage.setItem("B", ipB);
    localStorage.setItem("C", ipC);
    localStorage.setItem("D", ipD);

    localStorage.setItem("Net1", ipNet1);
    localStorage.setItem("Net2", ipNet2);
    localStorage.setItem("Net3", ipNet3);
    localStorage.setItem("Net4", ipNet4);

    localStorage.setItem("Bro1", ipBro1);
    localStorage.setItem("Bro2", ipBro2);
    localStorage.setItem("Bro3", ipBro3);
    localStorage.setItem("Bro4", ipBro4);

    localStorage.setItem("Wn1", ipWn1);
    localStorage.setItem("Wn2", ipWn2);
    localStorage.setItem("Wn3", ipWn3);
    localStorage.setItem("Wn4", ipWn4);

    localStorage.setItem("Host", commaSeparateNumber(ipHost));
    localStorage.setItem("TotalHost", commaSeparateNumber(totalHost));

    localStorage.setItem("TotalHostnum", totalHost);

    localStorage.setItem("Class", standartClass);

    if (parseInt(ipNet4) + 1 == parseInt(ipBro4) || ipNet4 == ipBro4) {
      localStorage.setItem("RangeA", "NA");
      localStorage.setItem("Char", "");
      localStorage.setItem("RangeB", "");
    } else {
      localStorage.setItem("RangeA", rangeA);
      localStorage.setItem("Char", " - ");
      localStorage.setItem("RangeB", rangeB);
    }

    localStorage.setItem("resBinMask", maskBinary);

    localStorage.setItem("Typeip", iptype);

    localStorage.setItem("Bin1", ipBin[1]);
    localStorage.setItem("Bin2", ipBin[2]);
    localStorage.setItem("Bin3", ipBin[3]);
    localStorage.setItem("Bin4", ipBin[4]);

    localStorage.setItem("inId", intId);

    localStorage.setItem("ip1", q1);
    localStorage.setItem("ip2", q2);
    localStorage.setItem("ip3", q3);
    localStorage.setItem("ip4", q4);

    hexs = hexes.join("");
    localStorage.setItem("HexId", hexs);

    window.location.href = '';
    return;
  }

  function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
    }
    return val;
  }

  // This Function will Get the IP subnet Mask Value from the Selection

  //------------------------------------ Default Selection--------------------------------------------

  function resetSelectElement(selectElement) {
    var options = selectElement.options;

    // Look for a default selected option
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      if (options[i].defaultSelected) {
        selectElement.selectedIndex = i;
        return;
      }
    }

    // If no option is the default, select first or none as appropriate
    selectElement.selectedIndex = 0; // or -1 for no option selected
  }

  //--------------------------Calculate Wild Card------------------------------------------------------------

  function calWildCard(w1, w2, w3, w4) {
    var outWild = [];

    outWild[1] = 255 - w1;
    outWild[2] = 255 - w2;
    outWild[3] = 255 - w3;
    outWild[4] = 255 - w4;

    return [outWild[1], outWild[2], outWild[3], outWild[4]];
  }

  //-----------------------------Calculate Network Address ---------------------------------------------------------

  // This function will accept parameter from User Input IP Address and Subnet Mask Selected by User, broken into Single Digits

  function calNetworkAddress(en1, en2, en3, en4, ss1, ss2, ss3, ss4) {
    //-----------Network Address Output --------------------------------------

    var netOut = [];

    //--------Convert all input Value to Binary-------------------------------

    //-----Enter IP Portion ------
    //  cen1 = en1.toString(2);
    // cen2 = en2.toString(2);
    // cen3 = en3.toString(2);
    //cen4 = en4.toString(2);
    //----Subnet IP Portion
    // css1  = ss1.toString(2);
    // css2 = ss2.toString(2);
    // css3 = ss3.toString(2);
    //css4 = ss4.toString(2);

    //--------------'And 'the User Input Value with the Subnet Value Selected to get the Network Address ------------------------------------------------

    netOut[1] = en1 & ss1;
    netOut[2] = en2 & ss2;
    netOut[3] = en3 & ss3;
    netOut[4] = en4 & ss4;

    //-----------Convert Binary Value Back to Decimal-----------------------------------------------------------------------------------------------------------

    return [netOut[1], netOut[2], netOut[3], netOut[4]];
  }

  //----------Calculate the BroadCast Address ------------------------------------------

  // Broad Cast Address is Derive by filling up the last few host bit Address with 1s

  // This Function will take in the Network Address Parameter  and fill the  last few host Bit with 1s

  // The Value for  ipBr1 to ipBr4 is derive  in the ipMasks Function

  function calBroadcast(net1, net2, net3, net4) {
    var broadOut = [];

    broadOut[1] = net1 | ipBr1;
    broadOut[2] = net2 | ipBr2;
    broadOut[3] = net3 | ipBr3;
    broadOut[4] = net4 | ipBr4;

    return [broadOut[1], broadOut[2], broadOut[3], broadOut[4]];
  }

  //----------Calculate  Number of Host and Subnet-----------------------------------------

  // Total Bits in an IPv4 Address is 32 bit = Subnet Bit  + Host Bit
  // This Function will take in the Subnet bit and Host Bit and Return the Number of Host and the Number of subnet

  function calHostSub(net, hosts) {
    var subnHost = [];

    //-------Calculate the Number of Subnet --------------

    subnHost[1] = Math.pow(2, net);

    //--------Calculate the Number of Host ----------------
    var num = Math.pow(2, hosts) - 2;
    if (num < 0) {
      subnHost[2] = 0;
    } else {
      subnHost[2] = Math.pow(2, hosts) - 2;
    }

    subnHost[3] = Math.pow(2, hosts);

    //-------- Minus 2 is because 1 is the Broadcast Address other is Network Address

    return [subnHost[1], subnHost[2], subnHost[3]];
  }

  //---------------------------Usable Ip Range -------------------------------------------------------
  //This fuction will get the Paramater of the Network Adress and BroadCast Address

  function calIpRange(netL, brL) {
    var lastOctet = [];

    // First Host IP of the Network
    lastOctet[1] = netL + 1;

    // Last Host Ip of the Network

    lastOctet[2] = brL - 1;

    return [lastOctet[1], lastOctet[2]];
  }
  //-------------------------This Function will check is it a  Valid IP  --------------------------///

  function CheckIP(IPText) {
    ValidIP = false;
    //-----declare  the Return Value

    var intIP = [];

    // Split the User Inputed IP and split into 4 array  by .
    ipParts = IPText.split(".");

    // If the Array Length is 4

    if (ipParts.length == 4) {
      // Loop through the Array
      for (i = 0; i < 4; i++) {
        // assign the array Value into TheNum
        TheNum = parseInt(ipParts[i]);
        // Check whether the User inputed number is Between  0 to 255
        if (TheNum >= 0 && TheNum <= 255) {
          //Yes Assign the Value
          intIP[i] = TheNum;
        }
        //No Break out of the Loop
        else {
          break;
        }
      }

      // If length equals 4 is a Valid IP
      if (i == 4) ValidIP = true;
    }
    return [ValidIP, intIP[0], intIP[1], intIP[2], intIP[3]];
  }

  dropSelect = 0;

  kase = 0;

  resetSelectElement(slct2);

  document.getElementById("getIp").value = "";
}

function clearForm(formObj) {
  var allElements = formObj.elements;
  for (i = 0; i < allElements.length; i++) {
    if (
      allElements[i].type == "text" ||
      allElements[i].type == "number" ||
      allElements[i].type == "date" ||
      allElements[i].type == "textarea"
    )
      allElements[i].value = "";
  }
}


