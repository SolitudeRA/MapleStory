var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d#l��������߸����һ���\r\n[#v1112915#:��ά+4.��/ħ+4.HP/MP+500��].\r\n\r\n"//
            text += "#L1##e#r#v1112915#�һ�������ָ,��Ҫ:#v4030002#x20��.#l\r\n\r\n"//3
            text += "#L2##e#r#v4030002#x1.��ȡ������ָר�þ���.#l\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L3##e#d#v4170001#x20 + #v1032060# ������ #v1032061#ȫ����+3 ��ħ+1#l\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L4##e#d#v4170001#x30 + #v1032061# ������ #v1032101#ȫ����+6 ��ħ+2#l\r\n"//3
            //text += "" + ��ɫ��ͷ + "#L5##e#d#v4170001#x50 + #v1032101# ������ #v1032186#ȫ����+9 ��ħ+3#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		         if(cm.haveItem(4030002,20)){
				cm.gainItem(4030002, -20);
				cm.gainItem(1112915,4,4,4,4,500,500,4,4,10,10,10,10,0,0);//��Ҷ����
				//cm.gainMeso(999999);
            cm.sendOk("�����ɹ���");
			//cm.worldMessage(6,"��ң�["+cm.getName()+"]������[����̩����]���������ͽ������쵽���°ɣ�");
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ��һ�[������ָ]����ϲ��ϲ��");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡�������߽�ָ����Ҫ\r\n#v4030002#x20��");
            cm.dispose();
			}
        } else if (selection == 2) {
		cm.openNpc(9000017, 66);
        } else if (selection == 3) {
		cm.openNpc(9000017, 31);
        } else if (selection == 4) {
		cm.openNpc(9000017, 32);
        } else if (selection == 5) {
		cm.openNpc(9000017, 33);
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}

