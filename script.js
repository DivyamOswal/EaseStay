let isDatePickerOpen = false; // Track state

function toggleDatePicker() {
    let dateInput = document.getElementById("hiddenDatePicker");

    if (!isDatePickerOpen) {
        dateInput.showPicker(); // Open the native date picker
    }

    isDatePickerOpen = !isDatePickerOpen; // Toggle state
}

function updateDateButton() {
    let dateInput = document.getElementById("hiddenDatePicker");
    let dateButton = document.getElementById("dateButton");

    if (dateInput.value) {
        let selectedDate = new Date(dateInput.value);
        let formattedDate = selectedDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }).replace(/\//g, '-'); // Convert format to dd-mm-yy

        dateButton.textContent = `📅 ${formattedDate}`; // Update button with formatted date
    }

    isDatePickerOpen = false; // Ensure the picker closes properly
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
  });

  var swiper = new Swiper(".exploreSwiper", {
    slidesPerView: 6,
    centeredSlides: false,
    loop : false,
    },
  );

  var swiper = new Swiper(".browseSwiper.swiper", {
    slidesPerView: 4,
    spaceBetween: 3,
    centeredSlides: false,
    loop : false,
  });

  var swiper = new Swiper(".bottom-content.swiper", {
    slidesPerView: 7,
    spaceBetween: 12,
    loop: false,
    resistanceRatio: 0,
  });  

  var swiper = new Swiper(".deals-bottom.swiper", {
    slidesPerView: 2,
    spaceBetween: 4,
    loop : false,
  });

  const words = ['apartments', 'villas', 'homes', 'cottages'];
  let i = 0;
  
  const changeWord = () => {
    const wordEl = document.querySelector('#changing-word');
    if (wordEl) {
      wordEl.textContent = words[i];
      i = (i + 1) % words.length;
    }
  };

  setInterval(changeWord, 2500);