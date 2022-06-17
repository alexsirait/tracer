<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateKuesionerAlumnisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kuesioner_alumnis', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('a1', 100)->nullable();
            $table->string('a2', 100)->nullable();
            $table->string('a3', 100)->nullable();
            $table->string('a4', 100)->nullable();
            $table->string('a5', 100)->nullable();
            $table->string('a6', 100)->nullable();
            $table->string('a7', 100)->nullable();
            $table->string('a8', 100)->nullable();
            $table->string('a9', 100)->nullable();
            $table->string('a10', 100)->nullable();
            $table->string('a11', 100)->nullable();
            $table->string('a12', 100)->nullable();
            $table->string('b1', 100)->nullable();
            $table->string('b2', 100)->nullable();
            $table->string('b3', 100)->nullable();
            $table->string('b4', 100)->nullable();
            $table->string('b5', 100)->nullable();
            $table->string('b6', 100)->nullable();
            $table->string('b7', 100)->nullable();
            $table->string('b8', 100)->nullable();
            $table->string('b9', 100)->nullable();
            $table->string('b10', 100)->nullable();
            $table->string('b11', 100)->nullable();
            $table->string('b12', 100)->nullable();
            $table->string('b13', 100)->nullable();
            $table->string('b14', 100)->nullable();
            $table->string('b15', 100)->nullable();
            $table->string('b16', 100)->nullable();
            $table->string('c1', 100)->nullable();
            $table->string('d1', 100)->nullable();
            $table->string('d2', 100)->nullable();
            $table->string('d3', 100)->nullable();
            $table->string('d4', 100)->nullable();
            $table->string('d5', 100)->nullable();
            $table->string('d6', 100)->nullable();
            $table->string('d7', 100)->nullable();
            $table->string('d8', 100)->nullable();
            $table->string('d9', 100)->nullable();
            $table->string('d10', 100)->nullable();
            $table->string('d11', 100)->nullable();
            $table->string('d12', 100)->nullable();
            $table->string('d13', 100)->nullable();
            $table->string('d14', 100)->nullable();
            $table->string('d15', 100)->nullable();
            $table->string('d16', 100)->nullable();
            $table->string('d17', 100)->nullable();
            $table->string('d18', 100)->nullable();
            $table->string('d19', 100)->nullable();
            $table->string('d20', 100)->nullable();
            $table->string('d21', 100)->nullable();
            $table->string('d22', 100)->nullable();
            $table->string('d23', 100)->nullable();
            $table->string('d24', 100)->nullable();
            $table->string('e1', 100)->nullable();
            $table->string('e2', 100)->nullable();
            $table->string('e3', 100)->nullable();
            $table->string('e4', 100)->nullable();
            $table->string('e5', 100)->nullable();
            $table->string('e6', 100)->nullable();
            $table->string('e7', 100)->nullable();
            $table->string('e8', 100)->nullable();
            $table->string('e9', 100)->nullable();
            $table->string('e10', 100)->nullable();
            $table->string('f1', 100)->nullable();
            $table->string('f2', 100)->nullable();
            $table->string('f3', 100)->nullable();
            $table->string('f4', 100)->nullable();
            $table->string('f5', 100)->nullable();
            $table->string('f6', 100)->nullable();
            $table->string('f7', 100)->nullable();
            $table->string('h1', 100)->nullable();
            $table->string('h2', 100)->nullable();
            $table->string('h3', 100)->nullable();
            $table->string('h4', 100)->nullable();
            $table->string('h5', 100)->nullable();
            $table->string('h6', 100)->nullable();
            $table->string('h7', 100)->nullable();
            $table->string('h8', 100)->nullable();
            $table->string('h9', 100)->nullable();
            $table->string('h10', 100)->nullable();
            $table->string('h11', 100)->nullable();
            $table->string('h12', 100)->nullable();
            $table->string('h13', 100)->nullable();
            $table->string('h14', 100)->nullable();
            $table->string('h15', 100)->nullable();
            $table->string('h16', 100)->nullable();
            $table->string('h17', 100)->nullable();
            $table->string('h18', 100)->nullable();
            $table->string('h19', 100)->nullable();
            $table->string('h20', 100)->nullable();
            $table->string('h21', 100)->nullable();
            $table->string('h22', 100)->nullable();
            $table->string('h23', 100)->nullable();
            $table->string('h24', 100)->nullable();
            $table->string('h25', 100)->nullable();
            $table->string('h26', 100)->nullable();
            $table->string('h27', 100)->nullable();
            $table->string('h28', 100)->nullable();
            $table->string('h29', 100)->nullable();
            $table->string('h30', 100)->nullable();
            $table->string('h31', 100)->nullable();
            $table->string('h32', 100)->nullable();
            $table->string('h33', 100)->nullable();
            $table->string('h34', 100)->nullable();
            $table->string('h35', 100)->nullable();
            $table->string('h36', 100)->nullable();
            $table->string('h37', 100)->nullable();
            $table->string('h38', 100)->nullable();
            $table->string('h39', 100)->nullable();
            $table->string('h40', 100)->nullable();
            $table->string('h41', 100)->nullable();
            $table->string('h42', 100)->nullable();
            $table->string('h43', 100)->nullable();
            $table->string('h44', 100)->nullable();
            $table->string('h45', 100)->nullable();
            $table->string('h46', 100)->nullable();
            $table->string('h47', 100)->nullable();
            $table->string('h48', 100)->nullable();
            $table->string('h49', 100)->nullable();
            $table->string('h50', 100)->nullable();
            $table->string('h51', 100)->nullable();
            $table->string('h52', 100)->nullable();
            $table->string('h53', 100)->nullable();
            $table->string('h54', 100)->nullable();
            $table->string('h55', 100)->nullable();
            $table->string('h56', 100)->nullable();
            $table->string('h57', 100)->nullable();
            $table->string('h58', 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('kuesioner_alumnis');
    }
}
