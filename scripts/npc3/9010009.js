importPackage(net.sf.odinms.client);

var status = 0;
var jobName;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("�����ܺ�Ŷ~~�����ı��뷨�ǵ���ʱ�����ҡ�ף����ˣ�");
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˣ����� #b�ʵ�Ա#k �ҿ��԰��������תְŶ~~��");
        } else if (status == 1) {
            if(cm.getJob().getId() >= 100000 && cm.getJob().getId() <= 1510000){
                cm.sendNext("�ۣ�������ʿ�ŵ�һԱ���Һܸ���Ϊ�����Ŷ������");
                status = 160;
                return;
            }
            if(cm.getJob().getId() >= 2000){
                cm.sendNext("��⵽����ս��Ŷ!");
                status = 163;
                return;
            }
            if (cm.getLevel() < 255 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 80000000000000000000) {
                    cm.sendNext("������˼,��ֻΪ#dս��#k����!");
                    status = 98;
                } else if (cm.getLevel() < 1000000000000000000000000) {
                    cm.sendYesNo("������Ҫ����ħ��ʦ�ľ�����ȥ��ӡħ��������,#b����Ա#k ������ħ���Կ�,����Ӧ�þ���Ϲ�ȥ֧Ԯ��,�������������ְҵ��ǰ��������������ħ���ľ���,����һ�����ĵ�·,��ô�����Ϊ #bħ��ʦ#k ��");
                    status = 150;
                    
                } else {
                    cm.sendNext("��~~���ֿ���һ�����֣�\r\n��ϲ��ﵽ�� #r[10��]#k  ��ô����ѡ��� #b[��һְҵ]#k �ǣ�");
                    status = 153;
                }
            } else if (cm.getLevel() < 300000000000000000000000) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[30��]#k ��ʱ��Ϳ��Խ���#b[�ڶ���תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L0##b�̿�#l    #L1##b����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L2##b����#l    #L3##b��ʿ#l    #L4##bǹսʿ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L5##b����#l    #L6##b��#l    #L7##b��ʦ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L8##b����#l    #L9##b����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                cm.sendSimple("��~�����ּ����ˣ���ϲ��ﵽ#r[30��]#k ����תְΪһ����\r\n#L10##bȭ��#l   #L11##bǹ��#l");

            } else if (cm.getLevel() < 700000000000000000000) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[70��]#k ��ʱ��Ϳ��Խ���#b[������תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 96;
                cm.sendYesNo("��ϲ��ﵽ�� #r[70��]#k �����ھ�Ҫ��� #b[������תְ]#k ��");
            } else if (cm.getLevel() < 1200000000000000000000000000000000000000) {
                cm.sendNext("��ô����ð�ջ���˳���ɡ���Ŭ�����лر�����Ȼ��һ�ж��������׵ġ����㵽�� #r[120��]#k ��ʱ��Ϳ��Խ���#b[���Ĵ�תְ]#k��ʱ������������Ŷ��");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 138;
                cm.sendYesNo("��ϲ��ﵽ�� #r[120��]#k �����ھ�Ҫ��� #b[���Ĵ�תְ]#k ��");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("�˲������Ѿ���������е�תְ��\r\n��������� #r[ת��]#k ,����Ҫ����Ա����ת�����ܣ�");
                status = 98;
            } else if (cm.getLevel() >= 25000000000000000000000000000000000005) {
                cm.sendOk("#d����... ΰ��� #r[#h #]#k ,���Ѿ�ͨ��һ��������������ս�ĵ�·,���ڳ�Ϊ�˷�����ӿ������.����������������,�� #r[����Ա]#k #d��ӡ��ħ������������,���Ĳ��������ܼ�,����Ҫ�����ĸ���ǿ������������еľ���!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }

        } else if (status == 2) {
            if (selection == 0) {
                jobName = "�̿�";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) {
                jobName = "׼��ʿ";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) {
                jobName = "ǹսʿ";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) {
                jobName = "���׷�ʦ";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) {
                jobName = "�𶾷�ʦ";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) {
                jobName = "��ʦ";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
            if (selection == 10) {
                jobName = "ȭ��";
                job = net.sf.odinms.client.MapleJob.BRAWLER;
            }
            if (selection == 11) {
                jobName = "��ǹ��";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            cm.sendYesNo("������ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
                        
                        
        } else if (status == 3) {
            cm.changeJob(job);
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            }

            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.dispose();

        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 960;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }

        } else if (status == 64) {
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 67) {
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 70) {
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 73) {
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 76) {
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 79) {
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 82) {
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 85) {
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 88) {
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 91) {
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
        } else if (status == 94) {
            cm.changeJob(MapleJob.MARAUDER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
        } else if (status == 97) {
            cm.changeJob(MapleJob.OUTLAW);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("�����ܺ�Ŷ~~���Ͱɣ��ټ���");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 137;
                cm.sendYesNo("#d��ϲ��ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k ��");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 109) {
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 115) {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 118) {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 121) {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 124) {
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 127) {
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 130) {
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 133) {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 136) {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5121001,0,30);
            //cm.teachSkill(5121002,0,30);
            //cm.teachSkill(5121003,0,30);
            //cm.teachSkill(5121004,0,30);
            //cm.teachSkill(5121005,0,30);
            // cm.teachSkill(5121006,0,30);
            //cm.teachSkill(5121007,0,30);
            //cm.teachSkill(5121008,0,30);
            //cm.teachSkill(5121009,0,30);
            //cm.teachSkill(5121010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 139) {
            cm.changeJob(MapleJob.CORSAIR);
            cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
            //cm.teachSkill(5220001,0,30);
            //cm.teachSkill(5220011,0,30);
            //cm.teachSkill(5220002,0,30);
            //cm.teachSkill(5221000,0,30);
            //cm.teachSkill(5221003,0,30);
            //cm.teachSkill(5221004,0,30);
            //cm.teachSkill(5221009,0,30);
            //cm.teachSkill(5221006,0,30);
            //cm.teachSkill(5221007,0,30);
            //cm.teachSkill(5221008,0,30);
            //cm.teachSkill(5221010,0,30);
            // cm.setLevel(121);
            cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 4) {
                cm.teachSkill(2000000,0,16); //Improving MP Recovery
                cm.teachSkill(2000001,0,10); //Improving Max MP Increase
                cm.teachSkill(2001002,0,20); //Magic Guard
                cm.teachSkill(2001003,0,20); //Magic Armor
                cm.teachSkill(2001004,0,20); //Energy Bolt
                cm.teachSkill(2001005,0,20); //Magic Claw
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("תְ�ɹ���ϣ�����Ϊ��ɫ�� #b[ħ��ʦ]#k ��");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("��û�з�����С����: #b[20 ����]#k ��");
                cm.dispose();
            }
            
        } else if (status == 154) {
            cm.sendSimple("��ô��~~������ѡ��һ������ϲ����ְҵ�ɣ�#b\r\n#L0#սʿ#l  #L1#ħ��ʦ#l  #L2#������#l  #L3#����#l  #L4#����#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "սʿ";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "ħ��ʦ";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "������";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            if (selection == 4) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            cm.sendYesNo("������ѡ��Ŷ��ȷ��Ҫ��Ϊһ�� #b[" + jobName + "] #k��"); 
        } else if (status == 156) {
                cm.changeJob(job);
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְ�ɹ���");
                cm.dispose();
            
        } else if (status == 161) {
            if(cm.getJob().getId() == 1000 && cm.getLevel()>=10){
                cm.sendSimple("�������㻹��һ��������,��ѡ��һ���ʺ��Լ���ְҵ��!#b\r\n#L0#����ʿ#l #L1#����ʿ#l #L2#����ʹ��#l #L3#ҹ����#l #L4#��Ϯ��#l#k");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=30 && cm.getJob().getId()%100 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���еڶ���תְ����");
            }else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=70 && cm.getJob().getId()%10 == 0){
                cm.sendYesNo("�����ȷ��Ҫ���е�����תְ����");
            }else{
                cm.sendOk("��Ŀǰ����������ʹ���ҵķ���Ŷ!");
                cm.dispose();
            }
        } else if (status == 162) {
            if(cm.getJob().getId() == 1000 && cm.getLevel()>=10){
                if (selection == 0) {
                    job = net.sf.odinms.client.MapleJob.GHOST_KNIGHT;
                } else if (selection == 1) {
                    job = net.sf.odinms.client.MapleJob.FIRE_KNIGHT;
                } else if (selection == 2) {
                    job = net.sf.odinms.client.MapleJob.WIND_KNIGHT;
                } else if (selection == 3) {
                    job = net.sf.odinms.client.MapleJob.NIGHT_KNIGHT;
                } else if (selection == 4) {
                    job = net.sf.odinms.client.MapleJob.THIEF_KNIGHT;
                }
                cm.changeJob(job);
                cm.gainItem(1142066,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=30 && cm.getJob().getId()%100 == 0){
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+10));
                cm.gainItem(1142067,1);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(parseInt(cm.getJob().getId() / 100) >10 && cm.getLevel()>=70 && cm.getJob().getId()%10 == 0){
                cm.gainItem(1142068,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(MapleJob.getById(cm.getJob().getId()+1));
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ��NPC��������ʿ ����תְΪ��ʿ��ְҵ��");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳��!");
            }
            cm.dispose();
        } else if (status == 164) {
            if(cm.getJob().getId() == 2000 && cm.getLevel() >=10){
                cm.sendYesNo("ս��ս������\r\n�������㻹��һ��սͯ,��ȷ��Ҫ���е�һ��תְ��");
            } else if(cm.getJob().getId() == 2100 && cm.getLevel() >=30) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���еڶ���תְ����");
            } else if(cm.getJob().getId() == 2110 && cm.getLevel() >=70){
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е�����תְ����");
            } else if(cm.getJob().getId() == 2111 && cm.getLevel() >=120) {
                cm.sendYesNo("ս��ս�����������ȷ��Ҫ���е��Ĵ�תְ����");
            } else if(cm.getJob().getId() == 2112 && cm.getLevel() >120) {
                cm.sendOk("���Ѿ���������е�תְ�������������Ͱɣ���");
            } else {
                cm.sendOk("������Ŀǰ���������һ�����Ϊ������Ŷ�����Ͱɣ�");
                cm.dispose();
            }
        } else if (status == 165) {
            if(cm.getJob().getId() == 2000 && cm.getLevel() >=10){
                cm.changeJob(MapleJob.Ares_1);
                cm.gainItem(1142129,1);
                cm.gainItem(1442077,1);
                cm.gainItem(2000022,50);
                cm.gainItem(2000023,50);
                cm.teachSkill(21000000,0,10);
                cm.teachSkill(21001003,0,20);
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2100 && cm.getLevel() >=30){
                cm.changeJob(MapleJob.Ares_2);
                cm.gainItem(1142130,1);
                //cm.gainItem(1442078,1); ���ͱ���ì
                cm.teachSkill(21100000,0,20);
                cm.teachSkill(21100002,0,20);
                cm.teachSkill(21100004,0,20);
                cm.teachSkill(21100005,0,20);
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2110 && cm.getLevel() >=70){
                cm.gainItem(1142131,1);
                cm.getPlayer().gainAp(5);
                cm.changeJob(MapleJob.Ares_3);
		cm.maxAllSkills(); //15001003
		cm.teachSkill(5001005,0,0);  //����ս������and���ҳ��ּ���Ч��
		cm.teachSkill(21120002,0,20); //ս��֮��	
		cm.teachSkill(21120009,0,20); //(����) ս��֮��- ˫���ػ�
		cm.teachSkill(21120010,0,20); //(����) ս��֮�� 
                cm.teachSkill(21110002,1,20); //ȫ���ӻ�
		cm.teachSkill(21121000,0,30); //����ǿ��
                cm.teachSkill(21120004,0,30);
                cm.teachSkill(21120005,0,30);
                cm.teachSkill(21120006,0,30);
                cm.teachSkill(21120007,0,30);
                cm.sendOk("תְ�ɹ������Ͷ�����������ǿ���ʱ��ǵ�������Ŷ��");
            } else if(cm.getJob().getId() == 2111 && cm.getLevel() >=120){
                cm.gainItem(1142132,1);
                cm.getPlayer().gainAp(5);
		cm.maxAllSkills();
		cm.teachSkill(5001005,0,0);  //����ս������and���ҳ��ּ���Ч��
                cm.teachSkill(21121000,10,30);
                cm.teachSkill(21120004,10,30);
                cm.teachSkill(21120005,10,30);
                cm.teachSkill(21120006,10,30);
                cm.teachSkill(21120007,10,30);
                cm.changeJob(MapleJob.Ares_4);
                cm.serverNotice("[תְϵͳ]: ��ϲ [" + cm.getPlayer() + "] ս����ת�ɹ�!!!");
                cm.sendOk("תְ�ɹ���ϣ�����Ժ��ð��֮·˳����");
            }
            cm.dispose();
        } else {
            cm.dispose();
        }  

    }
}