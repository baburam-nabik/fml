'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c9d3cf2eb665f950fa846c59af55d567",
"version.json": "8bb3d0449b0bd3376a3c2ca930f02c17",
"splash/img/light-2x.png": "5dd6212a312ac9a98dbc7e9c5a6e4767",
"splash/img/dark-4x.png": "e72f1a2754d8eaa7cb3ae55ba1bdf1ca",
"splash/img/light-3x.png": "89071bcc1271d1466e65f4b64ce9ab21",
"splash/img/dark-3x.png": "89071bcc1271d1466e65f4b64ce9ab21",
"splash/img/light-4x.png": "e72f1a2754d8eaa7cb3ae55ba1bdf1ca",
"splash/img/dark-2x.png": "5dd6212a312ac9a98dbc7e9c5a6e4767",
"splash/img/dark-1x.png": "327782e49b12e8d4d751ac9b26d24b8c",
"splash/img/light-1x.png": "327782e49b12e8d4d751ac9b26d24b8c",
"index.html": "88d7c6be3f1f93d45b9b747c94dc9d15",
"/": "88d7c6be3f1f93d45b9b747c94dc9d15",
"vercel.json": "c31ca871b53abdde9fc4de7b7e7548e0",
"firebase-messaging-sw.js": "789c6db27de6fdac512c0bdab1a51fb4",
"main.dart.js": "c84406480d834fc25b672c40cba39b1c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "011ee1d47d25b5b68aeda9153a9b8103",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d299eb39265d701822af0c04ee542c62",
".git/config": "88ed91944f053de054b605138c64a356",
".git/objects/61/39c247c4e5e6c0cae37bf88bdbae7fad5ae3bf": "4c8db23331f28c4c62b1667797474d12",
".git/objects/59/c4f149791e2d9532df797d9435378f8da3bea0": "7fce5ad4c81beabd6b10791513ff497a",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/66/5b075e585df69ecfc9d6e550de88bbe4a5d258": "126d8ac590eed305f0543872df9e2940",
".git/objects/66/e126e7452491e6f339d1b6ed17ed14824a9bac": "68ae7861a4c3811953eb8d7cdc26e8b6",
".git/objects/68/bdd5942bf551423434c3317695f598a834adeb": "62a8a520e49dcc40d97a4c423326ae8a",
".git/objects/3b/49454bf1f3e12e1f249e5fa82380aee0690209": "a9fa9ffacfcb6f3a2108a856f16acfca",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/6f/8f8ae3c33e6782290ae2a2a9aa45a0f89ca25e": "df4a270e41b39b5638881be39bfe78e1",
".git/objects/03/be37a9ae5d8cb3f813c998bd53dd56fccb0b6c": "b399bc2993a3240996c2b5bf8d73a642",
".git/objects/04/4bd345b402fca43d68757096730b0eb881652c": "ddda71ae6da0cea67aba2be49e6d6c07",
".git/objects/6a/2e5ab4d5193ae703a5b42b728f283bddf41a1c": "c4401ee42e1813c60271f8d0cf13bb54",
".git/objects/32/ae9289e20db8d466c6ce75f2a9f58497fe10ad": "018a1a45a4e625f950776598e98180bb",
".git/objects/56/7b1bb31fd1e231fe4a9a979d3bca9437f19b4a": "972f9ca3282f5d4b386e89d1e89e7741",
".git/objects/56/f5e7315bfa55cd78a5e677fcda7e67929ba33b": "45abfae45d6c45342764e41936d4458e",
".git/objects/0b/9c17d672b0545fa4419967fff6c4cf6c00a3bb": "dfa1e51f8d9666e5bc7b95b103e5ecf2",
".git/objects/0b/b607d09d112911adec079f4333ad83fd42560b": "df2423cc38c91f09424604ae7131c558",
".git/objects/5a/d562fa640621e6ba19b20a2333ad4e11d6abed": "cd3b1e1964df383661552d79e714084e",
".git/objects/9d/4f40b788883f0f9bcd806ec82fb3ef7f2c7c00": "379d17a1bc989cf5cf29fea1ad625a9c",
".git/objects/a3/9a702038f60cd8a738e9d0dd1cf470eae9ba95": "32b281e123765c39822d60fdaed6d140",
".git/objects/d9/6cf57186afb9823bf8e61bcf731b6055a15ad1": "3af6a188b749c5ae2114adb9e1396de2",
".git/objects/ac/7dc357439b4e9e3d9df2d478b6ee210f5a92e2": "ab3dda55a1de3c40bf1a9c8d9fcdcefc",
".git/objects/be/d4523cc1f9fb447435cc83cd183ce9ff6426d3": "0a7e6898a6f7990a9d72d454969f5f7a",
".git/objects/b3/0a180fbc3f002aec72efb171ba22bc24a68e97": "ea8c6f6564f1bde63a47779f9c8dc0c2",
".git/objects/b3/0a422d7adb1b1db5d5c77ca9a7299bccba1ed5": "351904b5bc899121139e470c42cbbc1b",
".git/objects/df/a8ce6d70bc29a153c965e66a2295a2432be536": "b03725f755d6d441f4539b3fd0c63a10",
".git/objects/df/e6a6a9a0890092fb64ea5e4e4823edf16a33d7": "95e0adcb076ab23729205e14af32ce10",
".git/objects/a2/747e5c675a10431d43e6bce3951568428ece55": "63ff1aa6064aa15ba15222e0d28e97c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9beee7341b1f3297db7031a4d04b537413227b": "aca3ba1020534628929c67a13569473d",
".git/objects/d8/a8884c896563b63b427018e8a1fae2a267e47e": "fa1b158e6cd0f2bfea1528d4cc63b19c",
".git/objects/d8/1bf17fa53eca4843a544289fe5f72b37058c0b": "18146063065f2d83fdcd7161b85ec9a8",
".git/objects/ab/97c67820632c0e710e08ce2e7063e626fd94fb": "3490c1ead838779b1c4b08635f6172be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0209d265911bf207dac851068c77bf0a978082": "7f32f9e2067e4e051bab547955274040",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/717b08361ad47577150f0ab269035fbf6e7ade": "535c26b69ee9cbfb069b4628a0579203",
".git/objects/c0/b70d3a11f3e6a5cb8d2b82c48238e36a70b221": "fa1c9e522f4065f7e140d55fae0c216b",
".git/objects/ee/aa69dfa055834e6d474b4e3a72c19db767a459": "d5c8b348353bf00ca7c8bb9682431be6",
".git/objects/fc/a72c8c3848b0ae2e67d4abcc7e8ccf0393dd0b": "917f168799da3c6c9d38864d3f234cc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/5904e6c1b3aaab13aebe88809b5b40f15cb9b4": "609a9b6cdc21cb3f9c9fe4a372771666",
".git/objects/e3/49629f0fb9c133f89946eb044fb8d12a727fa0": "d1965824f90989715e0047aebd7e95e4",
".git/objects/fe/f8257fc5d443e85227f210f08393ddee060955": "78c4b2e259828bde1f1533c1cd70634f",
".git/objects/fe/980e1c2e5881d2c93bc479fd67d1e0d77956b8": "3f968a8e83f60fa2fdd241d05d70f74a",
".git/objects/fb/08a8d3dbd8ea276f18da68d982c68eb095c35b": "53b67d5aeb1a01a6fbd2563ffdf70b40",
".git/objects/ed/b5fcd119eba84daff3a17ff0feca09eecc9d52": "a2eaeff803db407e888ceaeb84604f89",
".git/objects/c1/d705145d12f72cbea1f7970156720ca4a0c6f8": "6a0cc650ed19e8a3a0ad4f331f156513",
".git/objects/c1/345435f2b2b53e5ce510ead4fba815bd9eeb5b": "10524907f5317ac10b1a0580e681ce62",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/9e58eefc5d39768d6a1a7425a66e706ce93d6d": "d6cd03e2b3d42abb3c3c32e909457780",
".git/objects/4e/c8ac8bffb718f4a996c2b6a6d27519966f2208": "b18ca8845ffad0f829591a5943715127",
".git/objects/20/8033102bae3a7f13ba8d28a487760be1edd61a": "68093fa48fcaa9e812bf58ccc1b7174f",
".git/objects/27/943be9e3c66f7202589a43c8efa8fc7628bd2a": "e0a497672ec4f94df6f58dd8a961bc95",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/d8214a3a314cead7455b90ae88cf2d8e2feeae": "7b7eb256dd0cff75c498869178aeef63",
".git/objects/7c/20fb9b60d2018f38779d4cce17123a133d4365": "2ae8851be6e285ffbaa9d82ab26b58fe",
".git/objects/7c/10370e9c2916e812e3358121e7defbf4ab2031": "d91fa5e08b4ea4db1d4adfbd62ce4fd1",
".git/objects/16/59b1e74b58b6ae6a2ebcc77ecd2a71628ebd7a": "d10816c32768153a72b254fe762c4a4b",
".git/objects/89/64f6578a48de3c8fc71051ed40c5162897d7e4": "b5792d98c1b75058d5dfe7b362413bff",
".git/objects/45/7ed375b6cfe5c6c06f0bbc91f6cccbfa3ec632": "df2ae1c166ee1955d3f46df61db03eb0",
".git/objects/1f/055faab8cca3064a47954662e3f84c00d3e7ba": "0b49a6f2a6ece7a3639518bc81a8cc6e",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/6cbb5895f1f8e2114ddd8aa3bcd697bf840fd1": "508087ef7d0f684124c8b4ec23c9a6f0",
".git/objects/87/8e522324e3307d507aba6e351df939fb735cf2": "a9ac625ade0e78f87025a70060a99434",
".git/objects/87/ae952305180f028cd50e23a614184a1d1d0e30": "6e55fe11c0f826e6f5a025c69bd79a97",
".git/objects/80/3889aa1ea0510a99fc0fb4a269a49cbc9aec9f": "de126155c6fe9cdc3ddfbebef7392246",
".git/objects/19/3d69b06b35754ec0b8688363cd90a568ca6bf4": "45dde6ff8e67109074ac139fc66196c5",
".git/objects/4c/0772963f644657e03a2f475d6a181654225065": "3e7c674aab638f370f0145357d028dee",
".git/objects/26/1b1fcc472b6a0eeabf5f055e419e5fdd063e3c": "a4279742da41cc6af32bd49cd2691335",
".git/objects/4d/e6599a07e65914dd1c71295ead0c7d555988ac": "5241a541e940e01e3740109cf9e8d6b8",
".git/objects/72/b547e08b4387e8a0b6b58e3015c391fcda0c57": "c461899c1324c0f2fee9b85d7256b235",
".git/objects/72/ea01335223f6cf9236235fd4840859a821be6e": "e18b0656159014ea0d1951a40d5c3815",
".git/objects/72/efc417329de9ac5f4129a0ca32d77b46ac380b": "bb5f405a4c3759ca75ff3cb0b16c8f23",
".git/objects/44/021c597d3e8fa42332ec76a1d70add89c9dbbc": "c55e4858372bb8fa9aac9d4caac1bb12",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0f52b35fe225ab6ceced69d3c45be5bfed1ac7": "c5758403d683f53502c8c164022ff609",
".git/objects/88/9908fafc3deddfc60bfc400abd070b06b8bae3": "d6f2b7592f63f26df7684760b574df88",
".git/objects/07/e3d31cac6fb4ddcd2dff8b1180c6522c164386": "5f108a13dbea1b06425c7f37cb8b5894",
".git/objects/9a/f571c5c355b33b1fbd30ef6d75d9f150b49cd4": "90c7babd0212f854a1c1dfb15de8dc67",
".git/objects/9a/ec7db5a4efe7091c2ababc231af1d02897b255": "5d76a50703d96f282fa4ff9f8b9b3eb8",
".git/objects/9a/2bfd718e527242aae8b8774a6baf1898607c02": "80aa5c7817b0303ed9ea3e3063af35f6",
".git/objects/36/dec8c600f98170e5249c05d7abbd466989005d": "3653f69c14e9b9271dae4659784b8442",
".git/objects/36/def20ff7b824ad7b1113cdc56f2f9b875050ce": "63deb9b63573e44fd5ecc96cba76c719",
".git/objects/31/631bd7d585b2f60db4e63888628b28e22f6600": "637660da70feec1d2fe90fb20260d29d",
".git/objects/31/0cef62c477eb76712ebd92f1ddc88f23d5df47": "60e691669df5d0e28bed4499f763cbe9",
".git/objects/96/9d7ffd9c9aaba8d0288a7e86ceae574cc28668": "c988f3a2fcf72b29de3af29427e839c1",
".git/objects/3a/48e56ba5246d0bc3cff58923771c6b1c4f1f93": "92aa65a1d510d5c63089d42dd70dd223",
".git/objects/98/a6f1de389f60e07561aac23bb693436c27d769": "6233cebcd5818f3105452a9655f80244",
".git/objects/30/097f1164262ff8493ff5fe2688002ec489987f": "e0f38ba16146092e18f9b0817f893823",
".git/objects/30/7570700b4bc84ee9a9974b2e40e901c6fcf203": "66343b44e0d8d1c9a52fc9d78194257f",
".git/objects/5e/d13aa67a2c1691a47b6cb4fbe5f27d46e3c74b": "f5eb4ff6b1eacf1804671267d2eb8ee4",
".git/objects/37/29dcb1b6bd4403d39279e46cbd35115c674275": "98e3e7baf298928b1b7dad7aad3ef554",
".git/objects/08/f7271ecb3b994c25c2a05b52ef0d75a3869561": "affae6731172b0b70f49f60bf9449fff",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/e1b72010a5babf05286a78265d0f886e114347": "6cc9e8e2e383ded4650bb815ddb19cf0",
".git/objects/52/f4fa5d67eadef922bb958255ffacca064df462": "6378ec1fd89ae50fc4f5ccd09416c731",
".git/objects/55/8f9707df2bdf9f28e4feb2d56876b8e84be77e": "f6c59228fcd1c79b98215dc28a1f0e72",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/6bb750e37c97ed5fa0540df5cae4d9df864a5b": "e7ba707526e88da924a9fec717cde07b",
".git/objects/90/ce15ba48ca998f018a3985b2214eff914193c6": "88095df5d3c04f32b5ef8a14c5e1890b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/51e32b94be2cc9324e7448eadcebd7eb02b160": "b2ad6f9f6f4fdcdf6c112b0f4e269691",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/46090944d40f18c91b33b0bb1f5394c272b2f8": "a33ecc69bcc50256b30b1241b48ac218",
".git/objects/b1/3c0256df16cd52b14b2208772b9f946771f759": "6550753c946ae3cb2431b527d8df92bc",
".git/objects/dd/d0e81f0aa57b621155ef54af416dbcd602ca23": "2f2af36e333dc54be863bc8677b395f3",
".git/objects/b6/a2cdb4b3aa32e7449cfe734329efd50baf01b5": "f93eb1796d4e157bada334e3d89b4081",
".git/objects/aa/6022f106626c3ee14d4b08ccb30b72fb101bb8": "92f8410b22e6971399bfea59a4ca1143",
".git/objects/aa/154ed5846deb890d291e3cda05d998d8e1e629": "49ef8ba1306bffcfe4e57bc7e84f6824",
".git/objects/af/be8546d51fc451efe9a38eb58f86fd8fc4f898": "1a614b5f93b0ae8c7d5320e05272aafc",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/cb527b884026b19396e4c6e3517334b6de009b": "158c19804c3e40f585f2e8c0f8ee5848",
".git/objects/b0/2ced01c9d8aa8a57f0be69411b97cd8bcd1e14": "42c5149e763837ca9518e932409bcc98",
".git/objects/a6/c1574c62a7053f4c9be94f3d193cf5d736ce93": "cafa5379841eb5b404620222eea9f3a1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/371aa4dcaa8ba3887e7f03c9ddbc5ae3503f01": "1808205e0caf0500515cab671ec59f0b",
".git/objects/ef/0be366b73bd65aad7eb12e005e345f2983a964": "8c715d8c4a4490b60d1a0367a8da1b34",
".git/objects/ef/9be45b298c7144a315ce02c9c6ae4ea42f2d2d": "d8f2eadab2568fad99c63ddd1300f580",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/8ea2d20c006332d182cf238bca688b80910d93": "082f6c097062c2a46f1020ecafbef32f",
".git/objects/cd/4d8b312101ed317c308699e0046d633d45bedc": "6ba03fd790f446e5d2eca9b6a6785669",
".git/objects/cd/f401889559e7b0d158e1d7eed33c9b8a69b45f": "1630f6b8f2b5321400c0bf5e279dac42",
".git/objects/cc/4ac7d034e4411e6fe0ff91d586835f5d2e5ea3": "c8657a599ca021c1cce3c61334f6553b",
".git/objects/f7/df80e01e59435561319dcb25cb474cefc4c3b7": "7d4b1ac3fbb7fbc674eb2b95c7cb084d",
".git/objects/e9/541ad92e4be78d4b2326bac72e651a57d330d0": "45a2c0790f6958ced99b8f1fa9575183",
".git/objects/e9/babe649b3f2c217837f87217109923efd19d16": "afea365693c946cf11cc55171683b504",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/911642c46cf82f4dc4998123f84cd61306a65d": "4d11971a47c720496b58c3c3b9e08fe4",
".git/objects/2d/59087bf776ef02e48bdc4e4b7e0367ed34a74c": "f1c121528cfc498bfe0069183d028d1d",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/8efb9213960d961f6ccea2fc3c7038fd27086e": "f184804ab34a735a3d59b9df95c57131",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/fc122e18419a488f7e89ef7d3bcca464f2b553": "aa903e8c244dc316285ee40499d7e137",
".git/objects/1b/2bd9bdda8e1c1547e19bdb5ba02873dd3e6c52": "f69c810450f2df3188723c53e7750b9a",
".git/objects/1b/b717cf850127575632a345a9bff3f44b89f1a3": "1dacc762130d33efba6a1cdaf2ecc2ef",
".git/objects/70/7802441871f79cc9ccaa3c073d6006124d362b": "2d930c93989d1f2945f1d56c02dea67d",
".git/objects/4f/13730a563aa98c6f89b6eb3fd1b17ae3a74a65": "2ea97546815d726a2b3caa96a481394e",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/ee12245d0cc5509dd952774dde05bacf5f51b7": "9d011f0b5fd1f3c6a64c7bc937c114ed",
".git/objects/8c/c90f4fdbbc49a2ef232fdcaf7da5aef0de9d51": "57aeb2f1adbfc43e145aef5ed4cf9f7c",
".git/objects/85/a3d9e25a9be2614be657cf3178dd599f1bb5c5": "33228e5cd081cb32b0f92eb861f79653",
".git/objects/85/3f842992252eac56bf3297e3a52af9e094c7db": "37a5e892705fec0d55e84bb17a48b65d",
".git/objects/1c/f2ece9381f70cc111fc1d48573eb8ce80c4955": "0572f9620a9a4188fcaf610e24ab460c",
".git/objects/82/e9cd2b288777e87b0970cbde505749bf49d1bc": "85333e67d6064ba4dd67ff4876245674",
".git/objects/49/b8bc1456505c1729e5493c2dd3a2d3a9e3f360": "45d86d14408b5d573cec4c8aa780b813",
".git/objects/40/d5f2fe325d0b39686e519489edf8ddc7a267b3": "e581f29da0a280485a3862142a70a440",
".git/objects/40/956ce0705858a58b746e5b3c9b5db68d0f1951": "269c95ac1094b541d6750b275f000af9",
".git/objects/2e/673d7bcf53a1c40bc247cb5677474f8e1d2a5b": "64627c8c4cde1cec5527a01412b068f4",
".git/objects/2b/2212890663dc3c7cdd9e5e776d472393dc6910": "011fc559aa2e2792214348c824d92170",
".git/objects/78/6064962e4fca8e871d203cd17fae61f6408eca": "71635ebc6e09354f22a29c6102a03544",
".git/objects/7f/13c75700acdbb7585efed771352e9e063ac82f": "d0d0e1863c1349339c4af27638b0fce3",
".git/objects/8e/9fda077776e8fef2b32b3256267557ff5ed18f": "3681b169c7d1931115329a5327b7f996",
".git/objects/8e/abbbfa0c30e852c63a8055c1e8c938c3b79128": "ebc43b19805c729a390ae53937f8f7d2",
".git/objects/25/007d7b42e27b178386e91f5fed7978456d4bdb": "87056a05e98fd1d817df6afdd10f3cdd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "891897aad3482d21ffb9757b884e5b9a",
".git/logs/refs/heads/main": "891897aad3482d21ffb9757b884e5b9a",
".git/logs/refs/remotes/origin/main": "e21cd3664818fa80989f96c9ca4a438b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3d8512b8600ca4a61ff769f3e5d8e77f",
".git/refs/remotes/origin/main": "3d8512b8600ca4a61ff769f3e5d8e77f",
".git/index": "e162e72647aeb507b4f5bfd01c33c790",
".git/COMMIT_EDITMSG": "a0ee41dc61dba001038afc023c570dcb",
"assets/AssetManifest.json": "d4c66e73467c2c606e202685112755aa",
"assets/NOTICES": "97c2b323bd2aea26b35fde427e6a91ff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8df93481883578a5b82dedd17ab2c600",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b856f3ef84e5e03876c2cac492984c72",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e5d253438aaf909d23d94c812449d56d",
"assets/fonts/MaterialIcons-Regular.otf": "fed279cada9f660fc3634dab6bf86bf9",
"assets/assets/images/soups.png": "b41222c93e01d2e0719966768639aae7",
"assets/assets/images/user_profile.png": "5c5e1b05d1b8d11d2f4be15d51f36ce3",
"assets/assets/images/homescreendrink.jpeg": "2444405537984553236d52b823ae5837",
"assets/assets/images/BANNER1%25201.png": "bdb2ff27c6243131ab8a56636f8ff040",
"assets/assets/images/restaurant.svg": "593156c724f867147cfbedf854339580",
"assets/assets/images/glasses_image.png": "d6c071c3a75bc8b50f69c6417bf2db41",
"assets/assets/images/book.png": "827aa06efc97de671c22c68bcde71c4b",
"assets/assets/images/home.svg": "b7b5fc399496346c3e8583226a80c673",
"assets/assets/images/fml%2520icon.png": "9d7e6ae0d95f028a8b5f9b1dcef52b33",
"assets/assets/images/logout.svg": "2d78b9c0c136028e9648958161618447",
"assets/assets/images/food_notification.png": "d6b35523d4b619dc1d5916ce091d5be6",
"assets/assets/images/order_food.jpeg": "4f6176e3f00e4eb3e218cc8dcdd8f8d9",
"assets/assets/images/Notification%2520screen.%2520image.png": "5e2ac319e733b9ae35a1b7cf6c882fdf",
"assets/assets/images/group_add.png": "3df12fc97e5ceb77722661dfa10d372b",
"assets/assets/images/Image%2520Placed.png": "ebd2851da1eab6b989d40fd60c41f867",
"assets/assets/images/banner2.png": "766836895f6b18bcfd6f4d02648897a6",
"assets/assets/images/searchicon.svg": "919bc2bcc4fdcba53202bf72bb44f214",
"assets/assets/images/banner3.png": "722b15e998a5279d96fae748e8a6575b",
"assets/assets/images/map.png": "d49e6e2f32aaee6756a5b200c19ebe20",
"assets/assets/images/BANNER2%25202.png": "94ef88f52621da2baa54364df417cc47",
"assets/assets/images/Download%2520Icon.png": "50ebb2ef75b9ad1b6c9f779f8271fde4",
"assets/assets/images/drniks.png": "c688ee4ca41516fdf36e58abebc377a5",
"assets/assets/images/outlet_banner.png": "a94560e2cd2c87dd9677043372a6b48b",
"assets/assets/images/home.png": "68fda1a4d7a76c660bcfa3ada2225f90",
"assets/assets/images/default_food.png": "670ff5c67600ef852ef08ac25414bbbd",
"assets/assets/images/account_circle.svg": "f62a198f3a076abde56c8d7a26a8c564",
"assets/assets/images/BANNER3%25203.png": "0223f82be4890591bb807910e6707071",
"assets/assets/images/salads.png": "f862b2f1ede8f6bd755d3223e2ea2735",
"assets/assets/images/Bg%25202.png": "c726f5bc7748bce90440f517618cd14a",
"assets/assets/images/invite_friends.png": "fa76516978644ce1ef00118a0b70f271",
"assets/assets/images/SplashScreen.gif": "4f3b86c12c0a50222ec6ca5db84d7088",
"assets/assets/images/qrcode%25201.png": "1e88fd9c8102d844d7a86c6688701ee8",
"assets/assets/images/Bg%25203.png": "da2aae3225e5cf2af2a116412135523e",
"assets/assets/images/bg%25201.png": "55c7556b5426331ae01475aa5e5f5708",
"assets/assets/images/sell.svg": "f1095da2f0ca7ed40224c3f5bf99e799",
"assets/assets/images/profile_pic.png": "7ce5606f5b3907462c2175f4482fe5b1",
"assets/assets/images/fml%2520icomm%25203.png": "f49a9f60d9b530df3dc1f9751ad0d448",
"assets/assets/images/arrow-left.png": "cebd89b3bbd0ec322297322fd8992f17",
"assets/assets/images/Image%2520Ennroute.png": "b6c7b66ea4d60d8758e8fed1dff7a5da",
"assets/assets/images/location_icon.png": "a9a962936136d1264e3ef12cd2d0210e",
"assets/assets/images/Image%2520sent.png": "c8c795c6eae4f6c807dbc984c276ad11",
"assets/assets/images/appicon.png": "86344b0a071b5612e712a1ebe6679c5a",
"assets/assets/images/outletimg.png": "4ba1f44edee22f24bf91040fac19d428",
"assets/assets/images/frame.svg": "a251cf30917f9592561ab52f968b7f78",
"assets/assets/images/largebeer.png": "6909f95428821367027da32f023772a5",
"assets/assets/images/My%2520Order%2520Screen.png": "3a3a767744801033b3d5b622784d5f6b",
"assets/assets/images/location.svg": "95050fc19cdac5ecebb5b299e543bfd6",
"assets/assets/images/Offfer%2520screen%2520Image.png": "c523ca564a3591c178f816cbc64d7746",
"assets/assets/images/jagar.png": "9b65fda2adcb50979b1923029fabaefc",
"assets/assets/images/veg.png": "9778e84eafff2f322a39a3bc101dc49b",
"assets/assets/images/registrationscreenimg.png": "a00704ecf7a198d108934e3214cd0f3a",
"assets/assets/images/food_menu.svg": "91e0e19014d7e2ef44cfd87c94296d02",
"assets/assets/images/loginscreen.png": "057f70c29ca6bc021d1e2db8b589b285",
"assets/assets/images/notifications.svg": "ab29846cac0145d2f4a480c2fd37d123",
"assets/assets/images/notification.png": "a66433ef15c79bddceced28138595777",
"assets/assets/images/SayajirajePark.png": "f90c56ae7d05e73a83ff53e75e22b7ea",
"assets/assets/images/default_drink.png": "616ce0ade1c6c3c6fe9a2ffeb3407e5d",
"assets/assets/images/clipboard-text.svg": "e36c6373c86c33e5e258950732666d18",
"assets/assets/images/fml_splash.gif": "c978947c0a43a259dbff103a67038379",
"assets/assets/logo/logo.png": "de64f260770bcf2bf29947c5eebde27c",
"assets/assets/logo/fml_logo_960_640_WB.png": "e034392473705f9b05bd57ff31b5e90b",
"assets/assets/logo/splash_logo.png": "cf0335631510aaa9a89807b0ec1cb287",
"assets/assets/map_style.json": "dedc67640c6771ad269b5275c0672b78",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
