/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// add class active to mobile wrapper after clicking on hamburger icon

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.navigation__wrapper-mobile');

hamburger.addEventListener('click', function(){
  mobileMenu.classList.toggle('active');
});

// chart

var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      backgroundColor: '#8DBEC8',
      borderColor: '#8DBEC8',
      data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
    },
    {
      label: 'FTD',
      backgroundColor: '#F29E4E',
      borderColor: '#F29E4E',
      data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
    },
    {
      label: 'Earned',
      backgroundColor: '#71B374',
      borderColor: '#71B374',
      data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
      hidden: true,
    }]
  },
});
