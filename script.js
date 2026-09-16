document.addEventListener('DOMContentLoaded', () => {
  // ১. স্কিল এবং ল্যাঙ্গুয়েজ বারের স্মুথ অ্যানিমেশন
  const progressBars = document.querySelectorAll('.bar-fill');
  
  progressBars.forEach(bar => {
    // বর্তমান width সংগ্রহ করে প্রাথমিক মান ০ করা
    const targetWidth = bar.style.width || '0%';
    bar.style.width = '0%';
    bar.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';
    
    // পেজ লোডের সামান্য পরে অ্যানিমেশন শুরু
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200);
  });

  // ২. প্রোফাইল ফটোতে ক্লিক করে লোকাল ইমেজ আপলোড ও লাইভ প্রিভিউ
  const profileImg = document.querySelector('.profile-photo');
  if (profileImg) {
    profileImg.style.cursor = 'pointer';
    profileImg.title = 'Click to change photo';

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    profileImg.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          profileImg.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // ৩. স্ক্রিনে ভাসমান 'Download PDF' বাটন যোগ করা
  const printBtn = document.createElement('button');
  printBtn.innerText = '📥 Download / Print PDF';
  printBtn.className = 'no-print';
  Object.assign(printBtn.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    padding: '12px 20px',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
    zIndex: '9999',
    transition: 'transform 0.2s, background-color 0.2s'
  });

  printBtn.addEventListener('mouseenter', () => {
    printBtn.style.backgroundColor = '#1e293b';
    printBtn.style.transform = 'translateY(-2px)';
  });
  printBtn.addEventListener('mouseleave', () => {
    printBtn.style.backgroundColor = '#0f172a';
    printBtn.style.transform = 'translateY(0)';
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });

  document.body.appendChild(printBtn);
});