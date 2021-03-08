let firstTypePoints = sessionStorage.getItem("firstTypePoints");
let secondTypePoints = sessionStorage.getItem("secondTypePoints");
let thirdTypePoints = sessionStorage.getItem("thirdTypePoints");
let fourthTypePoints = sessionStorage.getItem("fourthTypePoints");

let pointop = 0;
let mess;
let typo;
//first
if (
  firstTypePoints > secondTypePoints &&
  firstTypePoints > thirdTypePoints &&
  firstTypePoints > fourthTypePoints
) {
  typo = "You have a Dry Skin: take care while your young";
  mess = [
    'Dry skin is thin, delicate, almost never shiny. It produces little sebum. The pores are small and almost invisible. After washing with soap, an unpleasant sensation of "tightness" appears, the face itches and flakes. Dry skin is not prone to acne and rashes, but it is easily chapped. In response to external stimuli, red spots, dry "scales", micro-cracks appear. This skin may look great when young, but without care is prone to early wrinkles and premature aging.Some have dry skin from adolescence. For others, it "dries up" for various reasons:',
    "●	age,",

    "●	because of the lifestyle,",
    "●	stress or climate change,",
    "●	influence of the sun, wind, coarse water,",
    "●	disorders in general metabolism",
    "In any case, dry skin is dehydrated: it loses more moisture than it receives.And this must be corrected with proper care:",
    "●	Choose mild cleansers: milk or gel",
    "●	Use day creams that form a thin protective layer on the skin",
    "●	Apply cosmetic oils and nutrient-rich creams",
  ];
}

//second
else if (
  secondTypePoints > firstTypePoints &&
  secondTypePoints > thirdTypePoints &&
  secondTypePoints > fourthTypePoints
) {
  typo = "You have a Normal Skin:cherish your dream";
  mess = [
    'Normal skin is smooth, firm and fresh. The dream of any girl, she glows with an even healthy color. She has a good water and oil balance, so she does not shine from oils and does not "dry out". Such skin normally tolerates washing with foam and soft water at room temperature. The face remains fresh until the evening. Still, small pores may be visible on the nose and chin, and glossy areas or pustules may appear before menstruation.The "ideal balance" of normal skin is sometimes disturbed. In winter, it can become drier, and in summer, when the secretion of the sebaceous glands increases in heat, the face becomes oily. In addition, over the years, normal skin slowly turns to dry.',
    'To maintain the radiance and health of normal skin, it must be carefully cared for. It is not enough to win such a "prize" in the lottery, you also need to keep it. The skin must be protected from irritants, cleansed and moisturized.',
    "●	Choose mild cleansers",
    "●	Use light, non-greasy moisturizers",
    "●	Once a week you can do deep cleaning using a scrub",
  ];
}
//third
else if (
  thirdTypePoints > firstTypePoints &&
  thirdTypePoints > secondTypePoints &&
  thirdTypePoints > fourthTypePoints
) {
  typo = "You have a Combination Skin: needs a different approach";
  mess = [
    "This is the most common skin type. Combination skin has both oily and normal or even dry areas. Generally, the skin on the nose, forehead and chin is more oily. These areas are called the T-zone. Here, pustules are more often formed, enlarged pores, black spots are visible, within an hour after washing the skin becomes shiny.",
    "At the same time, on the temples and cheeks, the skin can be normal (even, matte) or even slightly dry. However, oily and dry skin areas can be positioned differently",
    "Skin care for combination skin type depends on the season and its condition. Seperate care helps to even out the condition of different areas. The simplest option: cleanse the skin with universal milk cleanser or facial wash, and then treat oily areas with a drying tonic, and apply a moisturizer to dry ones.",
  ];
}
//fourth
else if (
  fourthTypePoints > firstTypePoints &&
  fourthTypePoints > secondTypePoints &&
  fourthTypePoints > thirdTypePoints
) {
  typo = " You have Oily Skin: it will not age soon";
  mess = [
    "Oily skin is a headache for its owners. The pores of such skin are usually enlarged, and the sebaceous glands secrete an increased amount of sebum. Therefore, the face almost always shines, and when touching the skin with a napkin, you will see oily marks. Oil clogs the pores, and pathogenic microbes accumulate and multiply in them. As a result, inflammation, acne, and comedones often occur on the skin.",
    "This type of skin requires particularly special care. It must be carefully dried with cosmetics, but it is important not to over dry it. Oily skin can also suffer from dehydration at the same time, and its owners do not even understand the reasons for their skin feeling tight",
    "To care for oily skin, use:",
    "●	Cleansing foam, with fruit acids, chamomile extracts, celandine, etc.",
    "●	Deep cleansing lotions with anti-acne (anti-rash) effect",
    "●	Drying tonics",
    "●	Light moisturizers",
    "●	Intensive cleansing masks",
    'Important: creams, scrubs and masks are not to be applied to the skin with rashes or inflammations. When severe acne and inflammation appear, it is better to consult an aesthetician or a dermatologist.The good news is that oily skin tends to age more slowly. Wrinkles on it are formed later: excess sebum forms a reliable "protective layer" and protects it from drying out. With good care, such skin becomes normal over the years and delights with its freshness for a long time.',
  ];
}
//all
else {
  typo = "You have a Combination Skin: needs a different approach";
  mess = [
    "This is the most common skin type. Combination skin has both oily and normal or even dry areas. Generally, the skin on the nose, forehead and chin is more oily. These areas are called the T-zone. Here, pustules are more often formed, enlarged pores, black spots are visible, within an hour after washing the skin becomes shiny.",
    "At the same time, on the temples and cheeks, the skin can be normal (even, matte) or even slightly dry. However, oily and dry skin areas can be positioned differently",
    "Skin care for combination skin type depends on the season and its condition. Seperate care helps to even out the condition of different areas. The simplest option: cleanse the skin with universal milk cleanser or facial wash, and then treat oily areas with a drying tonic, and apply a moisturizer to dry ones.",
  ];
}

const mao = mess.map((ms) => `<li>` + ms + `</li>`).join("");

document.querySelector(".headmsg").innerHTML = typo;
const msgme = document.querySelector(".msghere");
msgme.className = "center-item";
//document.querySelector(".msghere").innerHTML = mao;

msgme.innerHTML = mao;
//document.querySelector(".usertype").value = typo;

//document.querySelector(".usertype").style.display = "none";

///////////////////social share

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");

const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init() {
  let postUrl = encodeURI(document.location.href);
  let postTitle = encodeURI("Hey there,Checkout my skin type!");
  // let postImg = encodeURI(pinterestImg.src);

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );

  twitterBtn.setAttribute(
    "href",

    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );

  // linkedinBtn.setAttribute(
  // "href",
  //"http://www.linkedin.com/shareArticle?mini=true&amp;url=https://simplesharebuttons.com"
  //`https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  //);
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );

  whatsappBtn.setAttribute(
    "href",
    `https://wa.me/?text=${postTitle} ${postUrl}`
  );
}

init();
