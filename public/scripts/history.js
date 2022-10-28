$(document).ready(function() {
  // create the record HTML structure when passing in the record object
  const createRecordElement = function(record) {
    if (record.ready) {
    const startTime = new Date(Date.parse(record.start_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
    const endTime = new Date(Date.parse(record.end_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
    return $record = $(`
      <tbody>
        <tr>
          <td>${record.id}</td>
          <td>${startTime}</td>
          <td>${endTime}</td>
          <td>Finished</td>
        </tr>
      </tbody>
    `);
    } else {
      const startTime = new Date(Date.parse(record.start_time)).toLocaleString('en-GB', { timeZone: 'UTC' });
      const endTime = '';
      return $record = $(`
        <tbody>
          <tr>
            <td>${record.id}</td>
            <td>${startTime}</td>
            <td>${endTime}</td>
            <td>Pending</td>
          </tr>
        </tbody>
     `);
    }
 };

 // Loop through the records data, turn them into HTML and add them in chronological order
 const renderRecords = function(records) {
  const $tableHead = $(`
    <thead>
      <tr>
        <th>Order Id</th>
        <th>Start Time</th>
        <th>End Time</th>
        <th>Status</th>
      </tr>
    </thead>
  `);
  $('#records').append($tableHead);

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
