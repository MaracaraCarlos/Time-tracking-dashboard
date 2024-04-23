fetch('./data.json')
.then(response => {
  if(response.ok === true) {
    return response.json()
  }
})
.then(json => {
  /* console.log(json); */
  updateData(json);
})

function updateData(arr) {

  const workHours = document.getElementById('work_hours');
  const workLast = document.getElementById('work_last');
  const playHours = document.getElementById('play_hours');
  const playLast = document.getElementById('play_last');
  const studyHours = document.getElementById('study_hours');
  const studyLast = document.getElementById('study_last');
  const exerciseHours = document.getElementById('exercise_hours');
  const exerciseLast = document.getElementById('exercise_last');
  const socialHours = document.getElementById('social_hours');
  const socialLast = document.getElementById('social_last');
  const selfCareHours = document.getElementById('self_care_hours');
  const selfCareLast = document.getElementById('self_care_last');
  const list = document.querySelectorAll('button');
  
  for(i=0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {
      
      if(e.target.className === 'dayly') {
        workHours.textContent = arr[0].timeframes.daily.current + 'hrs';
        workLast.textContent = arr[0].timeframes.daily.previous + 'hrs';
        playHours.textContent = arr[1].timeframes.daily.current + 'hrs';
        playLast.textContent = arr[1].timeframes.daily.previous + 'hrs';
        studyHours.textContent = arr[2].timeframes.daily.current + 'hrs';
        studyLast.textContent = arr[2].timeframes.daily.previous + 'hrs';
        exerciseHours.textContent = arr[3].timeframes.daily.current + 'hrs';
        exerciseLast.textContent = arr[3].timeframes.daily.previous + 'hrs';
        socialHours.textContent = arr[4].timeframes.daily.current + 'hrs';
        socialLast.textContent = arr[4].timeframes.daily.previous + 'hrs';
        selfCareHours.textContent = arr[5].timeframes.daily.current + 'hrs';
        selfCareLast.textContent = arr[5].timeframes.daily.previous + 'hrs';
      }else if(e.target.className === 'weekly') {
        workHours.textContent = arr[0].timeframes.weekly.current + 'hrs';
        workLast.textContent = arr[0].timeframes.weekly.previous + 'hrs';
        playHours.textContent = arr[1].timeframes.weekly.current + 'hrs';
        playLast.textContent = arr[1].timeframes.weekly.previous + 'hrs';
        studyHours.textContent = arr[2].timeframes.weekly.current + 'hrs';
        studyLast.textContent = arr[2].timeframes.weekly.previous + 'hrs';
        exerciseHours.textContent = arr[3].timeframes.weekly.current + 'hrs';
        exerciseLast.textContent = arr[3].timeframes.weekly.previous + 'hrs';
        socialHours.textContent = arr[4].timeframes.weekly.current + 'hrs';
        socialLast.textContent = arr[4].timeframes.weekly.previous + 'hrs';
        selfCareHours.textContent = arr[5].timeframes.weekly.current + 'hrs';
        selfCareLast.textContent = arr[5].timeframes.weekly.previous + 'hrs';
      }else if(e.target.className === 'monthly') {
        workHours.textContent = arr[0].timeframes.monthly.current + 'hrs';
        workLast.textContent = arr[0].timeframes.monthly.previous + 'hrs';
        playHours.textContent = arr[1].timeframes.monthly.current + 'hrs';
        playLast.textContent = arr[1].timeframes.monthly.previous + 'hrs';
        studyHours.textContent = arr[2].timeframes.monthly.current + 'hrs';
        studyLast.textContent = arr[2].timeframes.monthly.previous + 'hrs';
        exerciseHours.textContent = arr[3].timeframes.monthly.current + 'hrs';
        exerciseLast.textContent = arr[3].timeframes.monthly.previous + 'hrs';
        socialHours.textContent = arr[4].timeframes.monthly.current + 'hrs';
        socialLast.textContent = arr[4].timeframes.monthly.previous + 'hrs';
        selfCareHours.textContent = arr[5].timeframes.monthly.current + 'hrs';
        selfCareLast.textContent = arr[5].timeframes.monthly.previous + 'hrs';
      }
    })
  }
}