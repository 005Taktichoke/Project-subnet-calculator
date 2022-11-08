window.addEventListener("load", () => {
  const cip = localStorage.getItem("CIP");
  const short = localStorage.getItem("Short");
  const ipA = localStorage.getItem("A");
  const ipB = localStorage.getItem("B");
  const ipC = localStorage.getItem("C");
  const ipD = localStorage.getItem("D");

  const ipNet1 = localStorage.getItem("Net1");
  const ipNet2 = localStorage.getItem("Net2");
  const ipNet3 = localStorage.getItem("Net3");
  const ipNet4 = localStorage.getItem("Net4");
  
  const ipBro1 = localStorage.getItem("Bro1");
  const ipBro2 = localStorage.getItem("Bro2");
  const ipBro3 = localStorage.getItem("Bro3");
  const ipBro4 = localStorage.getItem("Bro4");

  const ipWn1 = localStorage.getItem("Wn1");
  const ipWn2 = localStorage.getItem("Wn2");
  const ipWn3 = localStorage.getItem("Wn3");
  const ipWn4 = localStorage.getItem("Wn4");

  const ipHost = localStorage.getItem("Host");
  const totalHost = localStorage.getItem("TotalHost");

  const rangeA = localStorage.getItem("RangeA");
  const char = localStorage.getItem("Char");
  const rangeB = localStorage.getItem("RangeB");

  const standartClass = localStorage.getItem("Class");

  const maskBinary = localStorage.getItem("resBinMask");

  const ipType = localStorage.getItem("Typeip");

  const ipBin1 = localStorage.getItem("Bin1");
  const ipBin2 = localStorage.getItem("Bin2");
  const ipBin3 = localStorage.getItem("Bin3");
  const ipBin4 = localStorage.getItem("Bin4");

  const intId = localStorage.getItem("inId");

  const q1 = localStorage.getItem("ip1");
  const q2 = localStorage.getItem("ip2");
  const q3 = localStorage.getItem("ip3");
  const q4 = localStorage.getItem("ip4");

  const hexId = localStorage.getItem("HexId");

  document.getElementById("result-address").innerHTML = cip;
  document.getElementById("result-short").innerHTML = cip;
  document.getElementById("short").innerHTML = short;
  document.getElementById("cidr").innerHTML = short;
  document.getElementById("subnetDisplay").innerHTML =
    ipA + "." + ipB + "." + ipC + "." + ipD;
  document.getElementById("networkDisplay").innerHTML =
    ipNet1 + "." + ipNet2 + "." + ipNet3 + "." + ipNet4;
  document.getElementById("broadDisplay").innerHTML =
    ipBro1 + "." + ipBro2 + "." + ipBro3 + "." + ipBro4;
  document.getElementById("wildDisplay").innerHTML =
    ipWn1 + "." + ipWn2 + "." + ipWn3 + "." + ipWn4;
  document.getElementById("hostDisplay").innerHTML = ipHost;
  document.getElementById("resClass").innerHTML = standartClass;
  document.getElementById("resRange").innerHTML = rangeA + char + rangeB;
  document.getElementById("hostTotal").innerHTML = totalHost;
  document.getElementById("resBinMask").innerHTML = maskBinary;
  document.getElementById("Typeip").innerHTML = ipType;
  document.getElementById("resBinID").innerHTML =
    ipBin1 + ipBin2 + ipBin3 + ipBin4;
  document.getElementById("inId").innerHTML = intId;
  document.getElementById("HexId").innerHTML = "0x" + hexId;
  document.getElementById("resultIP").innerHTML =
    q4 + "." + q3 + "." + q2 + "." + q1 + "." + "in-addr.arpa";
});
