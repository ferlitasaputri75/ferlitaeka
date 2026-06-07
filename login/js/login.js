(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Ambil semua form yang punya class 'needs-validation'
        var forms = document.getElementsByClassName('needs-validation');
        
        // Loop form tersebut
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                
                // 1. HENTIKAN proses submit default (refresh halaman)
                // Kita tambahkan 'always' agar bisa kita proses manual
                event.preventDefault();
                event.stopPropagation();

                // 2. Cek Validasi (apakah kolom kosong atau format salah?)
                if (form.checkValidity() === false) {
                    // Jika form belum valid (kosong), biarkan Bootstrap memberi peringatan merah
                } else {
                    // --- BAGIAN LOGIN (LOGIKA UTAMA) ---
                    // Kode ini hanya jalan JIKA form sudah terisi semua (valid)
                    
                    // Ambil data dari input
                    var usernameInput = document.getElementById('username').value;
                    var passwordInput = document.getElementById('password').value;
                    var alertBox = document.getElementById('alertBox');

                    // Cek Username dan Password
                    // (Silakan ganti 'ferlita' dan '123' sesuai keinginanmu)
                    if (usernameInput === 'ferlita' && passwordInput === '123') {
                        
                        // Jika SUKSES
                        alertBox.style.display = 'block';
                        alertBox.className = 'alert alert-success'; // Hijau
                        alertBox.innerText = 'Login Berhasil! Masuk...';

                        // Tunggu 1 detik, lalu pindah halaman
                        setTimeout(function() {
                            window.location.href = 'home.html'; 
                        }, 1000);

                    } else {
                        
                        // Jika GAGAL (Password salah)
                        alertBox.style.display = 'block';
                        alertBox.className = 'alert alert-danger'; // Merah
                        alertBox.innerText = 'Username atau Password salah!';
                    }
                    // ------------------------------------
                }

                // Tambahkan class Bootstrap untuk styling validasi
                form.classList.add('was-validated');

            }, false);
        });
    }, false);
})();
