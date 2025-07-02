function renderCalendar() {
    const calendarContainer = document.getElementById("calendar-days");
    calendarContainer.innerHTML = "";

    for (let i = 1; i <= 31; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.className = `calendar-day cursor-pointer py-1 rounded-full transition ${i === 13 ? 'bg-green-500 text-white' : 'hover:bg-gray-200'}`;
      dayDiv.textContent = i;
      dayDiv.id = `date-${i}`;
      dayDiv.onclick = () => selectDate(i);
      calendarContainer.appendChild(dayDiv);
    }
  }

  function showTab(tab) {
    // Sembunyikan semua tab
    document.getElementById('calendar-tab').classList.add('hidden');
    document.getElementById('reminder-tab').classList.add('hidden');

    // Tampilkan tab yang dipilih
    document.getElementById(`${tab}-tab`).classList.remove('hidden');

    // Reset tombol tab
    const calendarBtn = document.getElementById('calendar-btn');
    const reminderBtn = document.getElementById('reminder-btn');

    calendarBtn.classList.remove('bg-green-600', 'text-white');
    calendarBtn.classList.add('bg-gray-300', 'text-black');

    reminderBtn.classList.remove('bg-green-600', 'text-white');
    reminderBtn.classList.add('bg-gray-300', 'text-black');

    // Aktifkan tombol yang dipilih
    if (tab === 'calendar') {
      calendarBtn.classList.remove('bg-gray-300', 'text-black');
      calendarBtn.classList.add('bg-green-600', 'text-white');
    } else {
      reminderBtn.classList.remove('bg-gray-300', 'text-black');
      reminderBtn.classList.add('bg-green-600', 'text-white');
    }
  }

  function selectDate(day) {
    for (let i = 1; i <= 31; i++) {
      const el = document.getElementById(`date-${i}`);
      if (el) el.classList.remove('bg-green-500', 'text-white');
    }
    const selected = document.getElementById(`date-${day}`);
    if (selected) selected.classList.add('bg-green-500', 'text-white');
  }

  function toggleBrush(type) {
    const morning = document.querySelector("#morning-check div");
    const night = document.querySelector("#night-check div");

    if (type === "morning") {
      morning.classList.remove("hidden");
      night.classList.add("hidden");
    } else {
      night.classList.remove("hidden");
      morning.classList.add("hidden");
    }
  }

  // Panggil saat halaman dimuat
  window.onload = function () {
    renderCalendar();
  };