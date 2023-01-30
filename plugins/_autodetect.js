/* Jika global.welcome = false, ini tidak akan berfungsi, ubah ke true dengan cara eval/manual dari file*/

import { WAMessageStubType } from '@adiwajshing/baileys'

export async function before(m) {
	if (!m.messageStubType || !m.isGroup) return;
	let edtr = `@${m.sender.split`@`[0]}`
	console.log(m.messageStubType)
	if (welcome) {
	if (m.messageStubType == 21) {
		await this.sendMessage(m.chat, { text: `${edtr} mengubah Subject Grup menjadi :\n*${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 22) {
		await this.sendMessage(m.chat, { text: `${edtr} telah mengubah icon grup.`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 1 || m.messageStubType == 23 || m.messageStubType == 132) {
		await this.sendMessage(m.chat, { text: `${edtr} *mereset* link grup!\n\n`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 24) {
		await this.sendMessage(m.chat, { text: `${edtr} mengubah deskripsi grup.\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 25) {
		await this.sendMessage(m.chat, { text: `${edtr} telah mengatur agar *${m.messageStubParameters[0] == 'on' ? 'hanya admin' : 'semua peserta'}* yang dapat mengedit info grup.`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 26) {
		await this.sendMessage(m.chat, { text: `${edtr} telah *${m.messageStubParameters[0] == 'on' ? 'menutup' : 'membuka'}* grup!\nSekarang ${m.messageStubParameters[0] == 'on' ? 'hanya admin yang' : 'semua peserta'} dapat mengirim pesan.`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 27) {
  if (!m.key.participant && !m.participant) return this.sendMessage(m.key.remoteJid, { text: `@${m.messageStubParameters[0].split('@')[0]} telah bergabung menggunakan tautan undangan grup ini`, mentions: [m.sender, m.key.participant, ...m.messageStubParameters] }, { quoted: gfliveLoc2 })
  this.sendMessage(m.chat, { text: `${edtr} telah menambahkan @${m.messageStubParameters[0].split('@')[0]}`, mentions: [m.sender, m.key.participant, ...m.messageStubParameters] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 28) {
	 await this.sendMessage(m.chat, { text: `@${m.key.participant.split('@')[0]} telah mengeluarkan @${m.messageStubParameters[0].split('@')[0]}`, mentions: [m.key.participant, ...m.messageStubParameters] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 29) {
		await this.sendMessage(m.chat, { text: `${edtr} telah menjadikan @${m.messageStubParameters[0].split`@`[0]} sebagai admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 30) {
		await this.sendMessage(m.chat, { text: `${edtr} telah memberhentikan @${m.messageStubParameters[0].split`@`[0]} dari admin.`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 72) {
		await this.sendMessage(m.chat, { text: `${edtr} mengubah durasi pesan sementara menjadi *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else if (m.messageStubType == 123) {
		await this.sendMessage(m.chat, { text: `${edtr} *menonaktifkan* pesan sementara.`, mentions: [m.sender] }, { quoted: gfliveLoc2 })
	} else {
		console.log({
			messageStubType: m.messageStubType,
			messageStubParameters: m.messageStubParameters,
			type: WAMessageStubType[m.messageStubType],
		});
	}
	}
}


export const disabled = false