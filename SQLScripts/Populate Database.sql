
declare @attackerId int, @defenderId int, @side int
set @attackerId = (select MissionTypeId from MissionTypes where name = 'attacker')
set @defenderId = (select MissionTypeId from MissionTypes where name = 'defender')
set @side = (select MissionTypeId from MissionTypes where name = 'side')
select @attackerId Attacker, @defenderId Defender, @side Side
declare @outerCircle int, @innerCircle int, @capital int
set @outerCircle = (select LocationId from Locations where name = 'Outer Ring')
set @innerCircle = (select LocationId from Locations where name = 'Inner Ring')
set @capital = (select LocationId from Locations where name = 'Capital')
select @outerCircle OuterCircle, @innerCircle InnerCircle, @capital Captial

--Hidden Camp
if not exists (select 1 from scenario..scenarios where name = 'Hidden Camp')
	insert into Scenario..Scenarios values ('hidden-camp', @innerCircle, 'Hidden Camp', 'Weak-willed fools.  They think their camp can remain hidden from us.  They think this disgraced mercenary can save them.  They do not know our wrath.  We will burn their houses, take their weapons, and bend their knees until they snap!', 0)
declare @hiddenCamp int = (select scenarioid from scenarios where name = 'hidden camp')

if not exists (select 1 from SpecialSetups where ScenarioId = @hiddenCamp and listorder = 1)
	insert into SpecialSetups values (@hiddenCamp, 1, 'This scenario features a new Mercenary.  Follow the Mercenary Rules explained in the rulebook to include it.')
if not exists (select 1 from SpecialSetups where ScenarioId = @hiddenCamp and listorder = 2)
	insert into SpecialSetups values (@hiddenCamp, 2, 'Place 5 HATE tokens on the Mercenary Figure card.')
		
if not exists (select 1 from SpecialRules where ScenarioId = @hiddenCamp and listorder = 1)
	insert into SpecialRules values (@hiddenCamp, 1, 'There is a Scythe hidden somewhere in the Huts.  Each time a player successfully Pillages a Hut, roll a die.  If (SWORD), the Figure has found the Scythe.  Place the yellow Interest token on this Figure.')
if not exists (select 1 from SpecialRules where ScenarioId = @hiddenCamp and listorder = 2)
	insert into SpecialRules values (@hiddenCamp, 2, 'A Figure carrying the Scythe and standing adjacent to a neautral Mercenary may spend an Action to automatically score a successful attack against it.')
if not exists (select 1 from SpecialRules where ScenarioId = @hiddenCamp and listorder = 3)
	insert into SpecialRules values (@hiddenCamp, 3, 'If the Figure carrying the Scythe is KOd, they drop the token in any adjacent Space of their choice.  Any Figure may Grab the Scythe by standing adjacent to it and performing a Grab Action.')
if not exists (select 1 from SpecialRules where ScenarioId = @hiddenCamp and listorder = 4)
	insert into SpecialRules values (@hiddenCamp, 4, 'The purple Interest tokens represent stimulant roots for the Mercenary.  If the neautral Mercenary passes through the token it gets +3 Movement Points.')
if not exists (select 1 from SpecialRules where ScenarioId = @hiddenCamp and listorder = 5)
	insert into SpecialRules values (@hiddenCamp, 5, 'In order to capture the Mercenary, follow the Mercenary rules explained in the rulebook.')
	
if not exists (select 1 from Rewards where Description = 'This Mercenary may now join your Tribe.')
	insert into Rewards values ('This Mercenary may now join your Tribe.')
if not exists (select 1 from Rewards where Description = '3 HATE')
	insert into Rewards values ('3 HATE')
	
declare @ThreeHate int = (select RewardId from Rewards where Description = '3 HATE')
declare @MercJoinTribe int = (select RewardId from Rewards where Description = 'This Mercenary may now join your Tribe.')

if not exists (select 1 from Missions where ScenarioId = @hiddenCamp)
begin
	 insert into Missions values (@hiddenCamp, @attackerId, 'Capture the Mercenary.', @MercJoinTribe, null)
	 insert into Missions values (@hiddenCamp, @defenderId, 'Capture the Mercenary.', @MercJoinTribe, null)
	 insert into Missions values (@hiddenCamp, @side, 'KO the Mercenary.', @ThreeHate, null)
 end


 ------------------------------------------------------------
 --Forsaken Woods
 if not exists (select 1 from scenario..scenarios where name = 'Forsaken Woods')
	insert into Scenario..Scenarios values ('forsaken-woods', @outerCircle, 'Forsaken Woods', 'We do not venture into the Foresaken Woods lightly.  Trees, last vestiges of the chained Mother, can be treacherous.  But a powerful mercenary hides in these woods, sheltered by its power.  We want him in our tribe.  Trees be damned.', 0)
declare @forsakenWoods int = (select scenarioid from scenarios where name = 'Forsaken Woods')

if not exists (select 1 from SpecialSetups where ScenarioId = @forsakenWoods and listorder = 1)
	insert into SpecialSetups values (@forsakenWoods, 1, 'This scenario features a new Mercenary.  Follow the Mercenary Rules explained in the rulebook to include it.')
if not exists (select 1 from SpecialSetups where ScenarioId = @forsakenWoods and listorder = 2)
	insert into SpecialSetups values (@forsakenWoods, 2, 'Place 5 HATE tokens on the Mercenary Figure card.')
		
if not exists (select 1 from SpecialRules where ScenarioId = @forsakenWoods and listorder = 1)
	insert into SpecialRules values (@forsakenWoods, 1, 'Interest tokens represent mystic passages in the Forsaken Woods.  The neautral Mercenary may spend 1 Movement Point while standing on any Interest token to move to any other Interest token.')
if not exists (select 1 from SpecialRules where ScenarioId = @forsakenWoods and listorder = 2)
	insert into SpecialRules values (@forsakenWoods, 2, 'In order to capture the Mercenary, follow the Mercenary rules explained in the rulebook.')

if not exists (select 1 from Rewards where Description = 'This Mercenary may now join your Tribe.')
	insert into Rewards values ('This Mercenary may now join your Tribe.')
if not exists (select 1 from Rewards where Description = '3 HATE')
	insert into Rewards values ('3 HATE')


if not exists (select 1 from Missions where ScenarioId = @forsakenWoods)
begin
	 insert into Missions values (@forsakenWoods, @attackerId, 'Capture the Mercenary.', @MercJoinTribe, null)
	 insert into Missions values (@forsakenWoods, @defenderId, 'Capture the Mercenary.', @MercJoinTribe, null)
	 insert into Missions values (@forsakenWoods, @side, 'KO the Mercenary.', @ThreeHate, null)
 end




 
 ------------------------------------------------------------
 
 select * from Scenarios
 --The Burning Hill
 if not exists (select 1 from scenario..scenarios where name = 'The Burning Hill')
	insert into Scenario..Scenarios values ('the-burning-hill', @outerCircle, 'The Burning Hill', 'They thought building their village on high ground would keep them safe.  The fools!  We will build ramps out of their piled corpses, if needed.  No hut will be left untouched.  We will claim what is rightfully ours!', 0)
declare @theBurningHill int = (select scenarioid from scenarios where name = 'The Burning Hill')

if not exists (select 1 from SpecialSetups where ScenarioId = @theBurningHill and listorder = 1)
	insert into SpecialSetups values (@theBurningHill, 1, 'Shuffle both Ambush Huts with 3 other random Huts and place each randomly in the indicated places.')

if not exists (select 1 from Rewards where Description = '2 RESOURCES')
	insert into Rewards values ('2 RESOURCES')

if not exists (select * from Upgrades where Name = 'Princeslayer')
	insert into Upgrades values ('Princeslayer', 'Princeslayer', 'Your Attack rolls against a Prince gets +2 Hits')
declare @princeslayer int = (select UpgradeId from Upgrades where Name = 'Princeslayer')

if not exists (select * from TribeUpgrades where UpgradeId = @princeslayer)
	insert into TribeUpgrades values (@princeslayer)
declare @tribePrinceSlayer int = (select TribeUpgradeId from TribeUpgrades where UpgradeId = @princeslayer)

if not exists (select 1 from Missions where ScenarioId = @theBurningHill)
begin
	 insert into Missions values (@theBurningHill, @attackerId, 'Successfully pillage 3 Huts.', @MercJoinTribe, @tribePrinceSlayer)
	 insert into Missions values (@theBurningHill, @defenderId, 'KO or Kill 6 enemy Figures.', @MercJoinTribe, @tribePrinceSlayer)
 end





  ------------------------------------------------------------
 --Forsaken Woods
 if not exists (select 1 from scenario..scenarios where name = 'King of the Hill')
	insert into Scenario..Scenarios values ('king-of-the-hill', @outerCircle, 'King of the Hill', 'Much is said about holding the high ground.  Most of it is true.  No tribe ever dominated the land from a stupid valley, so we will not suffer these weaklings to lord over us from atop their rock.  Shit rolls downhill, and so will their severed heads!', 0)
declare @kingOfTheHill int = (select scenarioid from scenarios where name = 'King of the Hill')

if not exists (select 1 from SpecialRules where ScenarioId = @kingOfTheHill and listorder = 1)
	insert into SpecialRules values (@kingOfTheHill, 1, 'The tribes compete to maintain a majority atop the Plateaus.  At the end of each Round, compare how many Figures each player has on the Plateaus to determine who (if anybody) has the majority.')
if not exists (select 1 from SpecialRules where ScenarioId = @kingOfTheHill and listorder = 2)
	insert into SpecialRules values (@kingOfTheHill, 2, 'Players should use the tracks to the side to keep tabs on how may Figures they have on the Plateaus at any time.')

	
if not exists (select * from SpecialMovesActions where ScenarioId = @kingOfTheHill and listorder = 1)
	insert into SpecialMovesActions values (@kingOfTheHill, 1, 'As an Action, you may Push an adjacent enemy Figure by 2.  It must de displaced 2 Spaces away in the opposite direction of the pusher.')
if not exists (select 1 from SpecialMovesActions where ScenarioId = @kingOfTheHill and listorder = 2)
	insert into SpecialMovesActions values (@kingOfTheHill, 2, 'If the enemy Figure falls from a Plateau, it suffers a 2 DICE attack.  If it is blocked by any other Figure, both suffer a 2 DICE attack.')


if not exists (select 1 from Rewards where Description = '3 RESOURCES')
	insert into Rewards values ('3 RESOURCES')
	
declare @ThreeResources int = (select RewardId from Rewards where Description = '3 RESOURCES')

if not exists (select * from Upgrades where Name = 'Push')
	insert into Upgrades values ('Push', 'Push', 'As an Action, you may Push an adjacent enemy 3 Spaces in the opposite direction.  If the enemy falls off any number of Plateaus it suffers a 2 DICE Attack.  If it is blocked by a Figure, both suffer a 2 DICE Attack.')
declare @push int = (select UpgradeId from Upgrades where Name = 'Push')

if not exists (select * from TribeUpgrades where UpgradeId = @push)
	insert into TribeUpgrades values (@push)
declare @tribePush int = (select TribeUpgradeId from TribeUpgrades where UpgradeId = @push)

if not exists (select 1 from Missions where ScenarioId = @kingOfTheHill)
begin
	 insert into Missions values (@kingOfTheHill, @attackerId, 'Have the majority atop the Hill at the end of any Round.', @ThreeResources, @tribePush)
	 insert into Missions values (@kingOfTheHill, @defenderId, 'Have the majority atop the Hill for 3 Rounds.', @ThreeResources, @tribePush)
 end










 select *
 from Scenarios s
 join Missions m on s.ScenarioId = m.ScenarioId
 join MissionTypes 


 	
select * from missions
select * from rewards
select * from TribeUpgrades
select * from Upgrades	