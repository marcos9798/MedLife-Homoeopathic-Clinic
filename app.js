
const visitKey = 'medlife_visits';
localStorage.setItem(visitKey, String(Number(localStorage.getItem(visitKey) || 0) + 1));
const i18n = {
  en: {
    tagline: 'Heal Naturally, Live Fully',
    navServices: 'Services', navDoctor: 'Doctor', navAppointment: 'Book', navContact: 'Contact', login: 'Patient Login', signup: 'Patient Sign-up',
    premiumCare: 'Premium Homoeopathic Care in Visnagar', heroTitle: 'Personalized healing for skin, hair, bone, joint & whole-body wellness.',
    heroSub: 'Trusted care by Dr. Keval Patel (BHMS) with in-clinic, online, and tele-consultation options.',
    bookNow: 'Book Appointment', chatWhatsApp: 'Chat on WhatsApp', timing: '5:00 PM – 9:00 PM (Sunday Closed)', tele: 'Google Meet Tele-Consultation Available',
    expYears: 'Years Experience', since: 'Serving Since', personalPlan: 'Personalized Treatment Plan', servicesTitle: 'Services & Treatments',
    acne: 'Acne & Skin Disorders', acneDesc: 'Acne, allergies, chronic skin concerns, and holistic skin support.', hair: 'Hair Fall Programs',
    hairDesc: 'Special packages for hair fall with diet and lifestyle guidance.', ortho: 'Orthopaedic Care', orthoDesc: 'Bone and joint disease support with gentle homoeopathic plans.',
    allergies: 'Allergies', allergiesDesc: 'Long-term allergy management and immune support treatment.', kidney: 'Kidney Stones', kidneyDesc: 'Consultative care for kidney stone symptoms and recurrence support.',
    online: 'Online Consultation', onlineDesc: 'Tele-consults on Google Meet for convenience and continuity.', doctorTitle: 'Doctor Profile', name: 'Name:', qualification: 'Qualification:',
    regNo: 'Registration No.:', experience: 'Experience:', specialization: 'Specialisations:', workExp: 'Practice:', photoNote: 'Professional photo placeholder (replace with uploaded photo).',
    virtualTour: '3D Virtual Clinic Tour', tourSub: 'Interactive preview area. Connect your real 360° clinic media for a complete virtual walkthrough.',
    tourText: 'Modern • Clean • Patient-Friendly', bookSection: 'Appointment Booking', bookText: 'Choose walk-in, online booking, WhatsApp, or phone call. UPI payment and tele-consultation support included.',
    fullName: 'Full Name', mobile: 'Mobile Number', condition: 'Condition / Concern', mode: 'Mode', slot: 'Preferred Slot', submitBooking: 'Submit Booking',
    trustTitle: 'Testimonials & FAQs', faq1q: 'Do you provide online consultation?', faq1a: 'Yes, tele-consultation is available through Google Meet.',
    faq2q: 'Can I book via WhatsApp?', faq2a: 'Yes, use the floating WhatsApp button for instant booking support.', faq3q: 'Is Sunday open?', faq3a: 'No, clinic is closed on Sundays.',
    blogTitle: 'Clinic Blog (Admin Managed)', blogSub: 'Publish patient education articles from your admin dashboard.', openMap: 'Open in Google Maps', timingsLabel: 'Timings:', quickLinks: 'Quick Links'
  },
  hi: {
    tagline: 'प्राकृतिक उपचार, संपूर्ण जीवन', navServices: 'सेवाएं', navDoctor: 'डॉक्टर', navAppointment: 'बुक करें', navContact: 'संपर्क', login: 'रोगी लॉगिन', signup: 'रोगी साइन-अप',
    premiumCare: 'विसनगर में प्रीमियम होम्योपैथिक देखभाल', heroTitle: 'त्वचा, बाल, हड्डी, जोड़ों और सम्पूर्ण स्वास्थ्य के लिए व्यक्तिगत उपचार।',
    heroSub: 'डॉ. केवल पटेल (BHMS) द्वारा क्लिनिक, ऑनलाइन और टेली-कंसल्टेशन विकल्पों के साथ भरोसेमंद देखभाल।',
    bookNow: 'अपॉइंटमेंट बुक करें', chatWhatsApp: 'व्हाट्सऐप पर चैट करें', timing: 'शाम 5:00 – 9:00 (रविवार बंद)', tele: 'Google Meet टेली-कंसल्टेशन उपलब्ध',
    expYears: 'वर्षों का अनुभव', since: 'सेवारत', personalPlan: 'व्यक्तिगत उपचार योजना', servicesTitle: 'सेवाएं और उपचार',
    acne: 'एक्ने और त्वचा रोग', acneDesc: 'एक्ने, एलर्जी, पुरानी त्वचा समस्याएं और समग्र त्वचा सहायता।', hair: 'हेयर फॉल प्रोग्राम', hairDesc: 'हेयर फॉल के लिए विशेष पैकेज, डाइट और लाइफस्टाइल मार्गदर्शन के साथ।',
    ortho: 'ऑर्थोपेडिक देखभाल', orthoDesc: 'हड्डी और जोड़ रोगों के लिए सौम्य होम्योपैथिक सहायता।', allergies: 'एलर्जी', allergiesDesc: 'दीर्घकालिक एलर्जी प्रबंधन और इम्यून सपोर्ट।',
    kidney: 'किडनी स्टोन', kidneyDesc: 'किडनी स्टोन के लक्षणों और पुनरावृत्ति के लिए परामर्श।', online: 'ऑनलाइन परामर्श', onlineDesc: 'सुविधाजनक Google Meet टेली-कंसल्ट।',
    doctorTitle: 'डॉक्टर प्रोफाइल', name: 'नाम:', qualification: 'योग्यता:', regNo: 'रजिस्ट्रेशन नं.:', experience: 'अनुभव:', specialization: 'विशेषज्ञता:', workExp: 'प्रैक्टिस:',
    photoNote: 'प्रोफेशनल फोटो प्लेसहोल्डर (अपलोडेड फोटो से बदलें)।', virtualTour: '3D वर्चुअल क्लिनिक टूर', tourSub: 'इंटरैक्टिव प्रीव्यू क्षेत्र। पूर्ण वर्चुअल वॉकथ्रू हेतु 360° मीडिया जोड़ें।',
    tourText: 'आधुनिक • स्वच्छ • रोगी-अनुकूल', bookSection: 'अपॉइंटमेंट बुकिंग', bookText: 'वॉक-इन, ऑनलाइन बुकिंग, व्हाट्सऐप या कॉल चुनें। UPI भुगतान और टेली-कंसल्टेशन उपलब्ध।',
    fullName: 'पूरा नाम', mobile: 'मोबाइल नंबर', condition: 'समस्या / कंडीशन', mode: 'मोड', slot: 'पसंदीदा समय', submitBooking: 'बुकिंग जमा करें',
    trustTitle: 'टेस्टिमोनियल्स और FAQs', faq1q: 'क्या आप ऑनलाइन परामर्श देते हैं?', faq1a: 'हाँ, Google Meet पर टेली-कंसल्टेशन उपलब्ध है।', faq2q: 'क्या मैं व्हाट्सऐप से बुक कर सकता/सकती हूँ?', faq2a: 'हाँ, तुरंत सहायता के लिए फ्लोटिंग व्हाट्सऐप बटन उपयोग करें।', faq3q: 'क्या रविवार खुला है?', faq3a: 'नहीं, रविवार को क्लिनिक बंद रहता है।',
    blogTitle: 'क्लिनिक ब्लॉग (एडमिन प्रबंधित)', blogSub: 'एडमिन डैशबोर्ड से रोगी शिक्षा लेख प्रकाशित करें।', openMap: 'Google Maps में खोलें', timingsLabel: 'समय:', quickLinks: 'त्वरित लिंक'
  },
  gu: {
    tagline: 'પ્રાકૃતિક સારવાર, સંપૂર્ણ જીવન', navServices: 'સેવાઓ', navDoctor: 'ડૉક્ટર', navAppointment: 'બુકિંગ', navContact: 'સંપર્ક', login: 'પેશન્ટ લૉગિન', signup: 'પેશન્ટ સાઇન-અપ',
    premiumCare: 'વિસનગરમાં પ્રીમિયમ હોમિયોપેથીક કેર', heroTitle: 'ચામડી, વાળ, હાડકા-જોડ અને સમગ્ર સ્વાસ્થ્ય માટે વ્યક્તિગત સારવાર.',
    heroSub: 'ડૉ. કેવલ પટેલ (BHMS) દ્વારા ક્લિનિક, ઑનલાઇન અને ટેલિ-કન્સલ્ટેશન સાથે વિશ્વસનીય સેવા.',
    bookNow: 'અપોઇન્ટમેન્ટ બુક કરો', chatWhatsApp: 'વોટ્સએપ પર ચેટ કરો', timing: 'સાંજ 5:00 – 9:00 (રવિવાર બંધ)', tele: 'Google Meet ટેલિ-કન્સલ્ટેશન ઉપલબ્ધ',
    expYears: 'અનુભવ વર્ષ', since: 'સેવા શરૂ', personalPlan: 'વ્યક્તિગત સારવાર યોજના', servicesTitle: 'સેવાઓ અને સારવાર',
    acne: 'એકને અને ચામડી રોગ', acneDesc: 'એકને, એલર્જી અને ચામડીની સમસ્યાઓ માટે સમഗ്ര સહાય.', hair: 'હેર ફોલ પ્રોગ્રામ', hairDesc: 'હેર ફોલ માટે ખાસ પેકેજ અને જીવનશૈલી માર્ગદર્શન.',
    ortho: 'ઓર્થોપેડિક કેર', orthoDesc: 'હાડકા અને જોડાના રોગ માટે સૌમ્ય હોમિયોપેથીક સહાય.', allergies: 'એલર્જી', allergiesDesc: 'લાંબા ગાળાનું એલર્જી મેનેજમેન્ટ અને ઇમ્યુન સપોર્ટ.',
    kidney: 'કિડની સ્ટોન', kidneyDesc: 'કિડની સ્ટોન લક્ષણો અને પુનરાવર્તન માટે માર્ગદર્શન.', online: 'ઑનલાઇન કન્સલ્ટેશન', onlineDesc: 'Google Meet દ્વારા સરળ ટેલિ-કન્સલ્ટ.',
    doctorTitle: 'ડૉક્ટર પ્રોફાઇલ', name: 'નામ:', qualification: 'લાયકાત:', regNo: 'રજી. નં.:', experience: 'અનુભવ:', specialization: 'વિશેષતા:', workExp: 'પ્રેક્ટિસ:',
    photoNote: 'પ્રોફેશનલ ફોટો પ્લેસહોલ્ડર (અપલોડ કરેલી ફોટોથી બદલો).', virtualTour: '3D વર્ચ્યુઅલ ક્લિનિક ટૂર', tourSub: 'ઇન્ટરેક્ટિવ પ્રીવ્યુ. સંપૂર્ણ વર્ચ્યુઅલ વૉકથ્રૂ માટે 360° મીડિયા જોડો.',
    tourText: 'મોડર્ન • ક્લીન • પેશન્ટ-ફ્રેન્ડલી', bookSection: 'અપોઇન્ટમેન્ટ બુકિંગ', bookText: 'વોક-ઇન, ઑનલાઇન, વોટ્સએપ અથવા કૉલથી બુક કરો. UPI અને ટેલિ-કન્સલ્ટેશન ઉપલબ્ધ.',
    fullName: 'પૂર્ણ નામ', mobile: 'મોબાઇલ નંબર', condition: 'સમસ્યા / સ્થિતિ', mode: 'મોડ', slot: 'પસંદગીનો સમય', submitBooking: 'બુકિંગ સબમિટ કરો',
    trustTitle: 'ટેસ્ટિમોનિયલ્સ અને FAQs', faq1q: 'શું ઑનલાઇન કન્સલ્ટેશન છે?', faq1a: 'હા, Google Meet દ્વારા ઉપલબ્ધ છે.', faq2q: 'શું વોટ્સએપથી બુકિંગ કરી શકું?', faq2a: 'હા, ફ્લોટિંગ વોટ્સએપ બટન ઉપયોગ કરો.', faq3q: 'રવિવારે ક્લિનિક ખુલ્લું છે?', faq3a: 'ના, રવિવારે ક્લિનિક બંધ છે.',
    blogTitle: 'ક્લિનિક બ્લોગ (એડમિન મેનેજ્ડ)', blogSub: 'એડમિન ડેશબોર્ડથી આરોગ્ય લેખ પોસ્ટ કરો.', openMap: 'Google Maps માં ખોલો', timingsLabel: 'સમય:', quickLinks: 'ઝડપી લિંક્સ'
  }
};

function applyLanguage(lang = 'en') {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = i18n[lang]?.[key] ?? i18n.en[key] ?? key;
    el.textContent = text;
  });
  localStorage.setItem('medlife_lang', lang);
}

const selector = document.getElementById('langSelect');
if (selector) {
  const stored = localStorage.getItem('medlife_lang') || 'en';
  selector.value = stored;
  applyLanguage(stored);
  selector.addEventListener('change', (e) => applyLanguage(e.target.value));
}

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(bookingForm).entries());
    const current = JSON.parse(localStorage.getItem('medlife_bookings') || '[]');
    current.unshift({ ...data, status: 'New', createdAt: new Date().toISOString() });
    localStorage.setItem('medlife_bookings', JSON.stringify(current));
    document.getElementById('bookingMsg').textContent = '✅ Booking submitted successfully.';
    bookingForm.reset();
  });
}

const blogSeed = [
  { title: 'Natural Approaches for Acne Management', excerpt: 'How homoeopathy can support long-term skin wellness.' },
  { title: 'Joint Pain: Lifestyle + Holistic Treatment', excerpt: 'Simple daily habits for better mobility.' },
  { title: 'Hair Fall Care: Why Early Action Matters', excerpt: 'Personalized plans and nutrition support.' }
];
const blogList = document.getElementById('blogList');
if (blogList) {
  const posts = JSON.parse(localStorage.getItem('medlife_blog_posts') || 'null') || blogSeed;
  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<h3>${post.title}</h3><p>${post.excerpt}</p>`;
    blogList.appendChild(card);
  });
}

function init3D() {
  if (!window.THREE) return;
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000);
  camera.position.z = 7;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(innerWidth, innerHeight);

  const geometry = new THREE.IcosahedronGeometry(1.7, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0x2c7bff, wireframe: true });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const torus = new THREE.Mesh(
    new THREE.TorusKnotGeometry(2.8, 0.05, 140, 16),
    new THREE.MeshStandardMaterial({ color: 0x3fdac2, transparent: true, opacity: 0.5 })
  );
  torus.rotation.x = Math.PI / 2;
  scene.add(torus);

  const light = new THREE.PointLight(0xffffff, 1.2, 100);
  light.position.set(3, 4, 6);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.003;
    mesh.rotation.y += 0.004;
    torus.rotation.z += 0.002;
    renderer.render(scene, camera);
  }
  animate();
  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
}
init3D();
