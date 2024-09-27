// function extractEmailHeaders() {
//   const originalLink = document.querySelector('a[href^="https://mail.google.com/mail/u/0/?ui=2&ik="][data-tooltip="Show original"]');
//   if (originalLink) {
//     fetch(originalLink.href)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const pre = doc.querySelector('pre.message-source');
//         if (pre) {
//           const headers = pre.textContent;
//           chrome.storage.local.set({ fullHeaders: headers });
          
//           const dkimHeader = headers.match(/dkim=([^\n]+)/i);
//           const dmarcHeader = headers.match(/dmarc=([^\n]+)/i);
          
//           chrome.storage.local.set({
//             dkimResult: { 
//               status: dkimHeader && dkimHeader[1].includes('pass') ? 'Pass' : 'Fail',
//               header: dkimHeader ? dkimHeader[0] : '없음'
//             },
//             dmarcResult: {
//               status: dmarcHeader && dmarcHeader[1].includes('pass') ? 'Pass' : 'Fail',
//               header: dmarcHeader ? dmarcHeader[0] : '없음'
//             }
//           });
//         }
//       })
//       .catch(error => console.error('Error fetching email headers:', error));
//   }
// }

// // Gmail 페이지의 변경을 감지하여 새 이메일이 열릴 때마다 헤더 추출
// const observer = new MutationObserver(mutations => {
//   for (let mutation of mutations) {
//     if (mutation.type === 'childList') {
//       extractEmailHeaders();
//     }
//   }
// });

// observer.observe(document.body, { childList: true, subtree: true });

// // 페이지 로드 시 초기 실행
// extractEmailHeaders();

// content.js
function getEmailHeaders() {
  let headers = '';  // 헤더를 저장할 변수
  
  // Gmail 헤더 찾기
  if (window.location.host === 'mail.google.com') {
    const emailHeaderElements = document.querySelectorAll('.ii.gt .a3s.aXjCH');
    emailHeaderElements.forEach(headerElement => {
      headers += headerElement.innerText + '\n';
    });
  }
  
  // Naver 메일 헤더 찾기
  else if (window.location.host === 'mail.naver.com') {
    const emailHeaderElements = document.querySelectorAll('.mailInfo .content');
    emailHeaderElements.forEach(headerElement => {
      headers += headerElement.innerText + '\n';
    });
  }

  // 헤더를 스토리지에 저장
  if (headers) {
    chrome.storage.local.set({ fullHeaders: headers }, function() {
      console.log('헤더가 저장되었습니다:', headers);
    });
  } else {
    console.log('헤더를 찾을 수 없습니다.');
  }
}

// 페이지가 로드되면 헤더를 가져옴
document.addEventListener('DOMContentLoaded', getEmailHeaders);
