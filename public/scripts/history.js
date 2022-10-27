$(document).ready(function() {
  // create the record HTML structure when passing in the record object
  const createRecordElement = function(record) {
    if (record.ready) {
    const startTime = new Date(Date.parse(record.start_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
    const endTime = new Date(Date.parse(record.end_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
    return $record = $(`
     <div>
       <div>${record.id}</div>
       <div>${startTime}</div>
       <div>${endTime}</div>
        <div>Finished</div>
     </div>
    `);
    } else {
      const startTime = new Date(Date.parse(record.start_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
      const endTime = 'unknown';
      return $record = $(`
      <div>
        <div>${record.id}</div>
        <div>${startTime}</div>
        <div>${endTime}</div>
        <div>Pending</div>
      </div>
     `);
    }
 };

 // Loop through the records data, turn them into HTML and add them in chronological order
 const renderRecords = function(records) {
   for (const record of records) {
     const $record = createRecordElement(record);
     $('#records').append($record);
   }
 };

 // Get the record data from /api/records, render them to our page
 const loadRecords = function() {
   $.ajax({
     url: '/api/records',
     method: 'GET'
   })
   .then(function(records) {

      console.log(records);
      renderRecords(records);

   })
   .catch((error) => {
     console.log('error:', error);
   });
 };

 loadRecords();

});
