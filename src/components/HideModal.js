export default function HideModal() {
  document.getElementById('send-btn').innerText = 'Message Sent';
  document.getElementById('myModal').style.display = 'none';
  document.getElementById('test1').style.opacity = '0';
  document.getElementById('test1').style.display = 'none';
  document.getElementById('test1').style.transform = 'translate(-50%, -300%)';
}
