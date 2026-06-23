// Animasiya olunacaq əsas qutunu seçirik
const box = document.getElementById('animBox');

// 1. HƏRƏKƏT ANİMASİYASI (Sola-Sağa sürüşmə)
function animateMove() {
    box.animate([
        { transform: 'translateX(0px)' },       // Başlanğıc nöqtəsi
        { transform: 'translateX(100px)' },     // Sağa doğru 100px hərəkət
        { transform: 'translateX(-100px)' },    // Sola doğru 100px hərəkət
        { transform: 'translateX(0px)' }        // Geri ilkin vəziyyətə qayıtma
    ], {
        duration: 1500, // Animasiyanın müddəti (1.5 saniyə)
        easing: 'ease-in-out' // Sürətlənmə tərzi
    });
}

// 2. BÖYÜMƏ ANİMASİYASI (Ölçü dəyişməsi - Scale)
function animateScale() {
    box.animate([
        { transform: 'scale(1)' },     // Normal ölçü
        { transform: 'scale(1.5)' },   // 1.5 dəfə böyümə
        { transform: 'scale(0.8)' },   // Kiçilmə
        { transform: 'scale(1)' }      // İlkin ölçü
    ], {
        duration: 1200, // Animasiya müddəti (1.2 saniyə)
        easing: 'ease-in-out'
    });
}

// 3. FIRLANMA ANİMASİYASI (Dairəvi fırlanma - Rotation)
function animateRotate() {
    box.animate([
        { transform: 'rotate(0deg)' },     // Başlanğıc bucağı (0 dərəcə)
        { transform: 'rotate(360deg)' }    // Tam bir dövr fırlanma (360 dərəcə)
    ], {
        duration: 1000, // Animasiya müddəti (1 saniyə)
        easing: 'ease-out'
    });
}

// 4. ŞƏFFAFLIQ ANİMASİYASI (Görünməz olub yenidən görünmə - Fade)
function animateFade() {
    box.animate([
        { opacity: 1 },    // Tam görünən
        { opacity: 0.1 },  // Demək olar ki, görünməz
        { opacity: 1 }     // Yenidən tam görünən
    ], {
        duration: 1500, // Animasiya müddəti (1.5 saniyə)
        easing: 'ease-in-out'
    });
}

// 5. RƏNG ANİMASİYASI (Fon rənginin dəyişməsi)
function animateColor() {
    box.animate([
        { backgroundColor: '#e74c3c' }, // İlkin rəng (Qırmızı)
        { backgroundColor: '#3498db' }, // Mavi rəngə keçid
        { backgroundColor: '#2ecc71' }, // Yaşıl rəngə keçid
        { backgroundColor: '#e74c3c' }  // Geri qırmızı rəngə keçid
    ], {
        duration: 2000, // Animasiya müddəti (2 saniyə)
        easing: 'ease-in-out'
    });
}
