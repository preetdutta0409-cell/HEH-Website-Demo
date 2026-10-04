
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

if (menu && nav) {
  menu.setAttribute('aria-expanded', 'false');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });

  document.querySelectorAll('.navlinks a, .navcta a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    });
  });
}

/* Admission form: clear success/error states */
const form = document.querySelector('#enquiryForm');
if (form) {
  const notice = form.querySelector('.notice');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add('validated');
      if (notice) {
        notice.style.display = 'block';
        notice.style.background = '#fff1f1';
        notice.style.color = '#9b2c2c';
        notice.textContent = 'Please complete the required fields before submitting your enquiry.';
      }
      form.reportValidity();
      return;
    }

    const phone = form.querySelector('[name="phone"]');
    if (phone && !/^[6-9]\d{9}$/.test(phone.value.replace(/\s+/g, ''))) {
      if (notice) {
        notice.style.display = 'block';
        notice.style.background = '#fff1f1';
        notice.style.color = '#9b2c2c';
        notice.textContent = 'Please enter a valid 10-digit Indian mobile number.';
      }
      phone.focus();
      return;
    }

    if (notice) {
      notice.style.display = 'block';
      notice.style.background = '#eef7f2';
      notice.style.color = '#246b49';
      notice.textContent = 'Thank you. Your enquiry has been received. The HEH team can contact you using the details provided.';
    }
    form.reset();
  });
}

/* Study Assistant */
const aiPanel = document.querySelector('#aiPanel');
const aiButton = document.querySelector('#aiButton');
const aiClose = document.querySelector('#aiClose');
const messages = document.querySelector('#aiMessages');
const input = document.querySelector('#aiInput');
const send = document.querySelector('#aiSend');

if (aiButton && aiPanel) aiButton.addEventListener('click', () => aiPanel.classList.toggle('open'));
if (aiClose && aiPanel) aiClose.addEventListener('click', () => aiPanel.classList.remove('open'));

function addMsg(text, type='bot') {
  if (!messages) return;
  const div = document.createElement('div');
  div.className = 'msg ' + type;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function advisor(text) {
  const q = text.toLowerCase();
  if (q.includes('fee') || q.includes('fees') || q.includes('price'))
    return "Fees and batch schedules should be confirmed directly with HEH. Tell me the class or course you are interested in and I can guide you to the right enquiry.";
  if (q.includes('b.com') || q.includes('commerce'))
    return "HEH's listed academic areas include B.Com, Accounts and Economics. Use Enquire Now to confirm the current batch, subjects, timings and fees.";
  if (q.includes('school') || q.includes('class 8') || q.includes('class 9') || q.includes('class 10') || q.includes('class 11') || q.includes('class 12'))
    return "HEH is listed for school-level coaching. Share your class and subject and the centre can confirm the current batch.";
  if (q.includes('net'))
    return "NET preparation is listed among HEH's offerings. Use the enquiry form to confirm the current subjects, faculty and schedule.";
  if (q.includes('location') || q.includes('address') || q.includes('where'))
    return "HEH Coaching Centre is in the Paharganj/Nabi Karim area of New Delhi. The Contact page has the address and directions.";
  if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp'))
    return "You can call HEH on 090158 70811, use WhatsApp, or submit the admission enquiry form on the Contact page.";
  return "I can help with school classes, B.Com, Accounts, Economics, NET, fees, location or contact. Try one of those topics.";
}

function sendAI() {
  if (!input) return;
  const value = input.value.trim();
  if (!value) return;
  addMsg(value, 'user');
  input.value = '';
  setTimeout(() => addMsg(advisor(value)), 180);
}

if (send) send.addEventListener('click', sendAI);
if (input) input.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendAI();
});
document.querySelectorAll('.ai-quick button').forEach(b => b.addEventListener('click', () => {
  if (input) {
    input.value = b.dataset.q || '';
    sendAI();
  }
}));
