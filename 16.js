// setInterval settimeout clearinterval browser

const Interval_id = setInterval(() => {
  console.log('hello');
}, 2000);

// clearInterval(Interval_id);

setTimeout(() => {
    clearInterval(Interval_id)
    console.log("stopped")
    
}, 5000);
