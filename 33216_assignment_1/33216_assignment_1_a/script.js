function toggleSideBar() {
    var sidebar = document.querySelector('.mySidebar');
    var content = document.querySelector('.content');
    var optionButton = document.querySelector('.closebtn')

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
        optionButton.style.marginLeft = '0';
    }
    
    else 
    {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        optionButton.style.marginLeft = '90px'
    }
}
