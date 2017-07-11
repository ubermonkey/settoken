$(document).ready(function () {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date("07/31/2017 00:00:00 UTC");
  initializeClock('clockdiv', deadline);

  /*** Allocation Charts **/
  Highcharts.chart('set-allocation', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'SET Token Allocation: 16,000,000,000'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'gray'
          }
        }
      }
    },
    series: [{
      name: 'SET Allocation',
      colorByPoint: true,
      data: [{
        name: 'Scholarships',
        y: 2400000000
    }, {
        name: 'Bounties',
        y: 800000000
    }, {
        name: 'Advisors',
        y: 4800000000
    }, {
        name: 'Token generation',
        y: 8000000000,
        sliced: true,
        selected: true
    }]
  }]
  });

  Highcharts.chart('eth-allocation', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'The breakdown of ETH will be as follows: 800,000'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'gray'
          }
        }
      }
    },
    series: [{
      name: 'ETH Allocation',
      colorByPoint: true,
      data: [{
        name: 'Product development and services',
        y: 480000,
        sliced: true,
        selected: true
    }, {
        name: 'Marketing Supply',
        y: 80000
    }, {
        name: 'Legal Reserve',
        y: 80000
    }, {
        name: 'Operational Expenditures',
        y: 160000
    }]
  }]
  });

  Highcharts.chart('xbt-allocation', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'The breakdown of XBT will be as follows: 80,000'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'gray'
          }
        }
      }
    },
    series: [{
      name: 'ETH Allocation',
      colorByPoint: true,
      data: [{
        name: 'Product development and services',
        y: 48000,
        sliced: true,
        selected: true
    }, {
        name: 'Marketing Supply',
        y: 8000
    }, {
        name: 'Legal Reserve',
        y: 8000
    }, {
        name: 'Operational Expenditures',
        y: 16000
    }]
  }]
  });




});
