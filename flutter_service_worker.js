'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e4b5301a72142b51f13ad3cabf7f95a0",
"version.json": "8bb3d0449b0bd3376a3c2ca930f02c17",
"index.html": "f1a0ea09387dec8eb1af161551e552b9",
"/": "f1a0ea09387dec8eb1af161551e552b9",
"firebase-messaging-sw.js": "789c6db27de6fdac512c0bdab1a51fb4",
"main.dart.js": "74f77fa7ea2fa0b68fa9860f80c04b15",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "011ee1d47d25b5b68aeda9153a9b8103",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b60432e3d064922cf5a7555f0256638",
".git/config": "88ed91944f053de054b605138c64a356",
".git/objects/61/39c247c4e5e6c0cae37bf88bdbae7fad5ae3bf": "4c8db23331f28c4c62b1667797474d12",
".git/objects/59/c4f149791e2d9532df797d9435378f8da3bea0": "7fce5ad4c81beabd6b10791513ff497a",
".git/objects/68/bdd5942bf551423434c3317695f598a834adeb": "62a8a520e49dcc40d97a4c423326ae8a",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/49454bf1f3e12e1f249e5fa82380aee0690209": "a9fa9ffacfcb6f3a2108a856f16acfca",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/04/4bd345b402fca43d68757096730b0eb881652c": "ddda71ae6da0cea67aba2be49e6d6c07",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/56/7b1bb31fd1e231fe4a9a979d3bca9437f19b4a": "972f9ca3282f5d4b386e89d1e89e7741",
".git/objects/56/f5e7315bfa55cd78a5e677fcda7e67929ba33b": "45abfae45d6c45342764e41936d4458e",
".git/objects/56/1d3d0990c52f87cd0a76f3281a40aafc6dd7ab": "d788e7e066eb9ad47ad9e3a509cad552",
".git/objects/51/c30d4be25e3965c90c8ee5a4e3bbebe14ec2da": "df68a8606c41c46f2c54eae1573479df",
".git/objects/58/a2c2827df5a1b6dfed730e788cf01126aaa8f6": "a1b3be04f70f480bb1ba651fb2581598",
".git/objects/0b/b607d09d112911adec079f4333ad83fd42560b": "df2423cc38c91f09424604ae7131c558",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/4f40b788883f0f9bcd806ec82fb3ef7f2c7c00": "379d17a1bc989cf5cf29fea1ad625a9c",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/7dc357439b4e9e3d9df2d478b6ee210f5a92e2": "ab3dda55a1de3c40bf1a9c8d9fcdcefc",
".git/objects/df/a8ce6d70bc29a153c965e66a2295a2432be536": "b03725f755d6d441f4539b3fd0c63a10",
".git/objects/df/e6a6a9a0890092fb64ea5e4e4823edf16a33d7": "95e0adcb076ab23729205e14af32ce10",
".git/objects/a2/747e5c675a10431d43e6bce3951568428ece55": "63ff1aa6064aa15ba15222e0d28e97c3",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/bd/75b10d92b42e71d90f98b3f12c7f52525dd0a9": "3f2e39dd46b323d5b792708fe0eb6d92",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0209d265911bf207dac851068c77bf0a978082": "7f32f9e2067e4e051bab547955274040",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c0/b70d3a11f3e6a5cb8d2b82c48238e36a70b221": "fa1c9e522f4065f7e140d55fae0c216b",
".git/objects/fc/a72c8c3848b0ae2e67d4abcc7e8ccf0393dd0b": "917f168799da3c6c9d38864d3f234cc4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/5904e6c1b3aaab13aebe88809b5b40f15cb9b4": "609a9b6cdc21cb3f9c9fe4a372771666",
".git/objects/e3/49629f0fb9c133f89946eb044fb8d12a727fa0": "d1965824f90989715e0047aebd7e95e4",
".git/objects/fe/ce11a792626e03baba0ba5e2e4a559c7b46032": "1fecc0911764636a29f4aa58e92e4493",
".git/objects/fe/f8257fc5d443e85227f210f08393ddee060955": "78c4b2e259828bde1f1533c1cd70634f",
".git/objects/fb/08a8d3dbd8ea276f18da68d982c68eb095c35b": "53b67d5aeb1a01a6fbd2563ffdf70b40",
".git/objects/ec/9e58eefc5d39768d6a1a7425a66e706ce93d6d": "d6cd03e2b3d42abb3c3c32e909457780",
".git/objects/20/8033102bae3a7f13ba8d28a487760be1edd61a": "68093fa48fcaa9e812bf58ccc1b7174f",
".git/objects/29/9eebd1438fed3647be6675e8c8502b245149d7": "2d79315f4d2124ea3284ebe85c868b38",
".git/objects/7c/20fb9b60d2018f38779d4cce17123a133d4365": "2ae8851be6e285ffbaa9d82ab26b58fe",
".git/objects/16/59b1e74b58b6ae6a2ebcc77ecd2a71628ebd7a": "d10816c32768153a72b254fe762c4a4b",
".git/objects/89/64f6578a48de3c8fc71051ed40c5162897d7e4": "b5792d98c1b75058d5dfe7b362413bff",
".git/objects/1f/055faab8cca3064a47954662e3f84c00d3e7ba": "0b49a6f2a6ece7a3639518bc81a8cc6e",
".git/objects/73/bc2519d1413fe8ee017dbe99372ebc5dd35b38": "b6e0b2665f4df7837d24fa5720a82cde",
".git/objects/73/6cbb5895f1f8e2114ddd8aa3bcd697bf840fd1": "508087ef7d0f684124c8b4ec23c9a6f0",
".git/objects/87/8e522324e3307d507aba6e351df939fb735cf2": "a9ac625ade0e78f87025a70060a99434",
".git/objects/87/ae952305180f028cd50e23a614184a1d1d0e30": "6e55fe11c0f826e6f5a025c69bd79a97",
".git/objects/80/3889aa1ea0510a99fc0fb4a269a49cbc9aec9f": "de126155c6fe9cdc3ddfbebef7392246",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/4c/0772963f644657e03a2f475d6a181654225065": "3e7c674aab638f370f0145357d028dee",
".git/objects/26/1b1fcc472b6a0eeabf5f055e419e5fdd063e3c": "a4279742da41cc6af32bd49cd2691335",
".git/objects/4d/e6599a07e65914dd1c71295ead0c7d555988ac": "5241a541e940e01e3740109cf9e8d6b8",
".git/objects/86/c937e67948f26d9124f0533b2ebe570e38b3a0": "21d1be8afac7683342758012a40fe5a1",
".git/objects/72/efc417329de9ac5f4129a0ca32d77b46ac380b": "bb5f405a4c3759ca75ff3cb0b16c8f23",
".git/objects/44/021c597d3e8fa42332ec76a1d70add89c9dbbc": "c55e4858372bb8fa9aac9d4caac1bb12",
".git/objects/43/a6c48c9e5ce129518a1f425404fbbd91b1739d": "f82ce9270c4a04dcfb16d2733c46fde4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/e3d31cac6fb4ddcd2dff8b1180c6522c164386": "5f108a13dbea1b06425c7f37cb8b5894",
".git/objects/00/80f2d7a12ebdf74cc8779d099c9aead6ccd6b8": "f5243443e2f1d630d3143743b7702e39",
".git/objects/9a/ec7db5a4efe7091c2ababc231af1d02897b255": "5d76a50703d96f282fa4ff9f8b9b3eb8",
".git/objects/31/631bd7d585b2f60db4e63888628b28e22f6600": "637660da70feec1d2fe90fb20260d29d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/9ee524563c0716e083ee09ad7684749746b9e0": "b7fb1493ce986680a20159f3c731a75d",
".git/objects/96/9d7ffd9c9aaba8d0288a7e86ceae574cc28668": "c988f3a2fcf72b29de3af29427e839c1",
".git/objects/3f/ac5ec6a5b6a7f8d5efd3e0c856d0b7f71b6c60": "829071ecec473b6e17a211089d97d116",
".git/objects/30/7570700b4bc84ee9a9974b2e40e901c6fcf203": "66343b44e0d8d1c9a52fc9d78194257f",
".git/objects/5e/d13aa67a2c1691a47b6cb4fbe5f27d46e3c74b": "f5eb4ff6b1eacf1804671267d2eb8ee4",
".git/objects/37/b4b18a45a965592d2bee4bd4f57c5d6adedc66": "8cce739adb9e5162bba018cad4f6e3c2",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/6c/e1b72010a5babf05286a78265d0f886e114347": "6cc9e8e2e383ded4650bb815ddb19cf0",
".git/objects/52/f4fa5d67eadef922bb958255ffacca064df462": "6378ec1fd89ae50fc4f5ccd09416c731",
".git/objects/52/900feca94555634db326e1cd1485289728a940": "9c916880c97332b6147053bfbb918270",
".git/objects/55/8f9707df2bdf9f28e4feb2d56876b8e84be77e": "f6c59228fcd1c79b98215dc28a1f0e72",
".git/objects/55/deb4a98cd1ba815f220dc1a5533552fdccd9fa": "a1eb974fdb5f4e4911d929edeb5989ce",
".git/objects/0a/77651fc0d0601ef6e371363a6effbf2f0c7565": "81dc593c70cfc0998445bfa2f2ed6d5b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/eacd21af8167b3cf5757ffcb78e48b1bab3a4c": "c2b5c4c18eb0d8cb95c939a59ee676dc",
".git/objects/b1/fdd2a19e9f58c1f299fa8b50b8ff64ea90e4e0": "b4e3f737503114bbb7813d83be084a1e",
".git/objects/b1/46090944d40f18c91b33b0bb1f5394c272b2f8": "a33ecc69bcc50256b30b1241b48ac218",
".git/objects/dd/d0e81f0aa57b621155ef54af416dbcd602ca23": "2f2af36e333dc54be863bc8677b395f3",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/b6/ea67f3e7436b8ffa424927abd4d670c313deb9": "087e8f9ad869412dcce6ae2189865a2c",
".git/objects/b6/a2cdb4b3aa32e7449cfe734329efd50baf01b5": "f93eb1796d4e157bada334e3d89b4081",
".git/objects/a9/7a82a11007d477758af5016e492f731b8d8109": "7711f75dfed144e308257e58d6601275",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/aa/6022f106626c3ee14d4b08ccb30b72fb101bb8": "92f8410b22e6971399bfea59a4ca1143",
".git/objects/af/85fd0325c8afc6897b0b14c6b74a1900d95ec2": "e58aafd28c498cce04696af0ad99eb30",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/baaa2f33c532056c7e11c9c43fd59c34aed145": "dd6deea8424a30b6a5e8062fc6867810",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/371aa4dcaa8ba3887e7f03c9ddbc5ae3503f01": "1808205e0caf0500515cab671ec59f0b",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/9be45b298c7144a315ce02c9c6ae4ea42f2d2d": "d8f2eadab2568fad99c63ddd1300f580",
".git/objects/ef/5dfca9434900df6a0b1e7252dd22f3ba982359": "4a19798645675d43218251121317f67c",
".git/objects/c3/8ea2d20c006332d182cf238bca688b80910d93": "082f6c097062c2a46f1020ecafbef32f",
".git/objects/cd/4d8b312101ed317c308699e0046d633d45bedc": "6ba03fd790f446e5d2eca9b6a6785669",
".git/objects/e9/541ad92e4be78d4b2326bac72e651a57d330d0": "45a2c0790f6958ced99b8f1fa9575183",
".git/objects/ce/b4ec2472161d49b792ba4cb69235251e94c83e": "4a860d26a08bd6154fd648eddbda926a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/2d87e6fdefc644569e422c07c68b028870b6d9": "347d6b02959c5a36ad419943357e71c2",
".git/objects/79/911642c46cf82f4dc4998123f84cd61306a65d": "4d11971a47c720496b58c3c3b9e08fe4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/8efb9213960d961f6ccea2fc3c7038fd27086e": "f184804ab34a735a3d59b9df95c57131",
".git/objects/1b/b717cf850127575632a345a9bff3f44b89f1a3": "1dacc762130d33efba6a1cdaf2ecc2ef",
".git/objects/84/80f78b3bb144fdacda548703832433a50d3185": "d0a759f2b08104dd56c4ce3c762dc61c",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/4f/13730a563aa98c6f89b6eb3fd1b17ae3a74a65": "2ea97546815d726a2b3caa96a481394e",
".git/objects/8d/04e748e19557f3698dc078f8958297b0cfaf18": "7b84e82bf7cd1682e8ba1ed4a8dfe055",
".git/objects/8d/118de05987c2bca2c53356d9b85dc8caf501f6": "dc0751a97fbdcad23975c96dbb455911",
".git/objects/85/3f842992252eac56bf3297e3a52af9e094c7db": "37a5e892705fec0d55e84bb17a48b65d",
".git/objects/1d/bc0f9f4c06891baf53c834a7f2928db2ec4c49": "7acf7b20b6bc241ad3c2d1f9a38d1110",
".git/objects/1c/f2ece9381f70cc111fc1d48573eb8ce80c4955": "0572f9620a9a4188fcaf610e24ab460c",
".git/objects/82/e9cd2b288777e87b0970cbde505749bf49d1bc": "85333e67d6064ba4dd67ff4876245674",
".git/objects/40/d5f2fe325d0b39686e519489edf8ddc7a267b3": "e581f29da0a280485a3862142a70a440",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/956ce0705858a58b746e5b3c9b5db68d0f1951": "269c95ac1094b541d6750b275f000af9",
".git/objects/2e/673d7bcf53a1c40bc247cb5677474f8e1d2a5b": "64627c8c4cde1cec5527a01412b068f4",
".git/objects/2b/2212890663dc3c7cdd9e5e776d472393dc6910": "011fc559aa2e2792214348c824d92170",
".git/objects/78/6064962e4fca8e871d203cd17fae61f6408eca": "71635ebc6e09354f22a29c6102a03544",
".git/objects/13/b24c1c43b454de1c7c3aeebce6fdead682d034": "cee5ddba31c2c5b8017ac4c1b4d88464",
".git/objects/8e/515eb9bfc328c09da53bebe6bf425c63e71e60": "5d16f3675c8dd32359d0f8c59f8dccb8",
".git/objects/8e/abbbfa0c30e852c63a8055c1e8c938c3b79128": "ebc43b19805c729a390ae53937f8f7d2",
".git/objects/25/007d7b42e27b178386e91f5fed7978456d4bdb": "87056a05e98fd1d817df6afdd10f3cdd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "64b2ffe60dff0a1cc12e214f0466507f",
".git/logs/refs/heads/main": "6296b54ca36aefbdaee71b09809b23ac",
".git/logs/refs/remotes/origin/main": "a51d0dbb496da783f59a7bedf6a59f40",
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
".git/refs/heads/main": "11e55b39a8dbf8eedb1edcca35df151f",
".git/refs/remotes/origin/main": "11e55b39a8dbf8eedb1edcca35df151f",
".git/index": "605a9cfe12f393bdc05bb6acf7ccfd54",
".git/COMMIT_EDITMSG": "6c00e125e8e68d3f3ec0aa8360d1b33a",
"assets/AssetManifest.json": "cc30ab35fe93edec027b9351e24a3fd1",
"assets/NOTICES": "7b69abef8c9dcfaf477620bb3a67f247",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "810d34bd8b653bb6e886a7addab80b7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "a3e6b8054ae18b19d9d852da861aca5d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3f86bcbd5000af52c2d3e373e57de8f1",
"assets/fonts/MaterialIcons-Regular.otf": "9317adb70d47008c23a4c0b89394a994",
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
"assets/assets/images/delete.svg": "fa90850f319f43af682b7f2334823b20",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
