const shareButton = document.getElementById('share-button');
const shareLinks = document.getElementById('share-links');
const button = document.querySelector('.btn-icon')

console.log(button)

shareButton.addEventListener('click', function() {
  if (shareLinks.getAttribute('data-visible') === 'false') {
    shareLinks.style.display = 'flex';
    button.style.backgroundColor = "#9eafc2"
    shareLinks.setAttribute('data-visible', 'true');
  } else {
    shareLinks.style.display = 'none';
    button.style.backgroundColor = "#ecf2f8"
    shareLinks.setAttribute('data-visible', 'false');
  }
});