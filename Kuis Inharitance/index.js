class Karyawan{
    constructor(golongan,jabatan,nama,nik) {
        this.golongan = golongan;
        this.jabatan = jabatan;
        this.nama = nama;
        this.nik = nik;
    }

   
}

class Manager extends Karyawan {
        constructor(golongan,jabatan,nama,nik,tunjangan_golongan,tunjangan_jabatan,jumlah_kehadiran,tunjangan_kehadiran,gaji){
            super(golongan,jabatan,nama,nik)
            this.tunjangan_golongan = tunjangan_golongan;
            this.tunjangan_jabatan = tunjangan_jabatan;
            this.jumlah_kehadiran = jumlah_kehadiran;
            this.tunjangan_kehadiran = 30000;
            this.gaji = gaji;

           if(this.golongan == "A"){
               this.total_golongan = 500000;
           }
           else if(this.golongan == "B"){
               this.total_golongan =1000000;
           }
           else if(this.golongan == "C"){
               this.total_golongan =1500000;
           }

           if(this.jabatan == "Manager"){
               this.total_jabatan = 2000000;
           }
           else if(this.jabatan == "Kabag"){
               this.total_jabatan = 1000000;
           }
        }

        
        

        info(){
            document.getElementById('1').innerHTML = `Jabatan :`;
            document.getElementById('2').innerHTML = ` ${this.jabatan}`
            document.getElementById('3').innerHTML = `Nik :`;
            document.getElementById('4').innerHTML = ` ${this.nik}`
            document.getElementById('5').innerHTML = `Nama :`;
            document.getElementById('6').innerHTML = ` ${this.nama}`
            document.getElementById('7').innerHTML = `Golongan :`;
            document.getElementById('8').innerHTML = ` ${this.golongan}`
            document.getElementById('9').innerHTML = `Tunjangan Golongan :`;
            document.getElementById('10').innerHTML = ` ${this.total_golongan}`
            document.getElementById('11').innerHTML = `Tunjangan Jabatan :`;
            document.getElementById('12').innerHTML = ` ${this.total_jabatan}`
            document.getElementById('13').innerHTML = `Jumlah Kehadiran :`;
            document.getElementById('14').innerHTML = ` ${this.jumlah_kehadiran}`
            document.getElementById('15').innerHTML = `Tunjangan Kehadiran :`;
            document.getElementById('16').innerHTML = ` ${this.tunjangan_kehadiran}`
            document.getElementById('17').innerHTML = `Gaji :`;
            document.getElementById('18').innerHTML = ` ${this.gaji = this.total_golongan + this.total_jabatan + this.tunjangan_kehadiran }`
        }    
        

        
}

class Kabag extends Karyawan {
    constructor(golongan,jabatan,nama,nik,tunjangan_golongan,tunjangan_jabatan,jumlah_kehadiran,tunjangan_kehadiran,gaji){
        super(golongan,jabatan,nama,nik)
        this.tunjangan_golongan = tunjangan_golongan;
        this.tunjangan_jabatan = tunjangan_jabatan;
        this.jumlah_kehadiran = jumlah_kehadiran;
        this.tunjangan_kehadiran = 30000;
        this.gaji = gaji;

        if(this.golongan == "A"){
            this.total_golongan = 500000;
        }
        else if(this.golongan == "B"){
            this.total_golongan =1000000;
        }
        else if(this.golongan == "C"){
            this.total_golongan =1500000;
        }

        if(this.jabatan == "kabag"){
            this.total_jabatan = 1000000;
        }
     }
    
    
     

    info(){
        document.getElementById('1').innerHTML = `Jabatan :`;
        document.getElementById('2').innerHTML = ` ${this.jabatan}`
        document.getElementById('3').innerHTML = `Nik :`;
        document.getElementById('4').innerHTML = ` ${this.nik}`
        document.getElementById('5').innerHTML = `Nama :`;
        document.getElementById('6').innerHTML = ` ${this.nama}`
        document.getElementById('7').innerHTML = `Golongan :`;
        document.getElementById('8').innerHTML = ` ${this.golongan}`
        document.getElementById('9').innerHTML = `Tunjangan Golongan :`;
        document.getElementById('10').innerHTML = ` ${this.total_golongan}`
        document.getElementById('11').innerHTML = `Tunjangan Jabatan :`;
        document.getElementById('12').innerHTML = ` ${this.total_jabatan}`
        document.getElementById('13').innerHTML = `Jumlah Kehadiran :`;
        document.getElementById('14').innerHTML = ` ${this.jumlah_kehadiran}`
        document.getElementById('15').innerHTML = `Tunjangan Kehadiran :`;
        document.getElementById('16').innerHTML = ` ${this.tunjangan_kehadiran}`
        document.getElementById('17').innerHTML = `Gaji :`;
        document.getElementById('18').innerHTML = ` ${this.gaji = this.total_golongan + this.total_jabatan + this.tunjangan_kehadiran }`
    
    }    

}


const manager = new Manager("C","Kabag","Fulan","123","","2.000000","30 Hari","*1000/Hari" );
manager.info();

console.log("")

const kabag = new Kabag("C","kabag","Ujang","456","","1000000","30 Hari","*1000/Hari");
kabag.info();

