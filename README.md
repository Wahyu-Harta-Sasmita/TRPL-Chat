# Cara Connect ke 2 Perangkat

## Langkah 1: Perangkat Pertama (Initiator)
1. Klik **icon +** pada perangkat pertama (sebagai initiator) untuk memulai koneksi.  
2. Setelah diklik, **kode signaling** (berupa signal data SDP) akan muncul di **console browser**.  
3. **Salin signal data** yang ditampilkan (gunakan `Ctrl + C`).

---

## Langkah 2: Perangkat Kedua (Responder)
1. Pada perangkat kedua, klik **icon +** juga untuk memulai koneksi.  
2. Akan muncul **prompt input** di mana Anda diminta untuk memasukkan signal data.  
3. **Tempelkan signal data** dari perangkat pertama ke prompt input (gunakan `Ctrl + V`).  
4. Tekan **OK** untuk memproses signal data.  
5. Setelah itu, perangkat kedua akan **menghasilkan signal data balasan**.  
6. **Salin signal data balasan** tersebut dari console browser perangkat kedua.

---

## Langkah 3: Kembali ke Perangkat Pertama
1. Pada perangkat pertama, buka **console browser**.  
2. **Tempelkan signal data balasan** dari perangkat kedua ke console browser.  
3. Tekan **Enter** untuk menyelesaikan proses signaling.

---

## Langkah 4: Koneksi Terbentuk
- Jika signal data telah dipertukarkan dengan benar:
  - Akan muncul pesan **"Peer connected!"** di kedua perangkat.  
  - Tombol **Send** akan aktif di kedua perangkat.

---

## Langkah 5: Mengirim Pesan Antar Perangkat
1. Ketik pesan pada kolom **input chat** di perangkat pertama atau kedua.  
2. Klik **icon pesawat (Send)** untuk mengirim pesan.  
3. Pesan akan muncul di area **chat** kedua perangkat secara **real-time**.
