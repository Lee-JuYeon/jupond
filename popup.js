// document.addEventListener('DOMContentLoaded', function() {
//     // const dkimStatus = document.getElementById('dkimStatus');
//     // const dmarcStatus = document.getElementById('dmarcStatus');
//     const headerArea = document.getElementById('headerArea');
  
//     function updateResults() {
//       chrome.storage.local.get([
//         // 'dkimResult',
//         // 'dmarcResult',
//         'fullHeaders'
//     ], function(result) {
//         // if (result.dkimResult) {
//         //   dkimStatus.textContent = `DKIM: ${result.dkimResult.status}`;
//         //   dkimStatus.classList.add(result.dkimResult.status.toLowerCase() === 'pass' ? 'pass' : 'fail');
//         // }
//         // if (result.dmarcResult) {
//         //   dmarcStatus.textContent = `DMARC: ${result.dmarcResult.status}`;
//         //   dmarcStatus.classList.add(result.dmarcResult.status.toLowerCase() === 'pass' ? 'pass' : 'fail');
//         // }
//         if (result.fullHeaders) {
//           headerArea.textContent = result.fullHeaders;
//         } else {
//           headerArea.textContent = '이메일 헤더를 불러오는 중...';
//         }
//       });
//     }
  
//     updateResults();
//     // 5초마다 결과 업데이트
//     setInterval(updateResults, 5000);
//   });

document.addEventListener('DOMContentLoaded', function() {
    const headerArea = document.getElementById('headerArea');
  
    function updateResults() {
      chrome.storage.local.get(['fullHeaders'], function(result) {
        if (result.fullHeaders) {
          headerArea.textContent = result.fullHeaders;
        } else {
          headerArea.textContent = '이메일 헤더를 불러오는 중...';
        }
      });
    }
  
    updateResults();
    // 5초마다 결과 업데이트
    setInterval(updateResults, 5000);
});
