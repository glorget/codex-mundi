const ISLANDS = [
  {name:"L'Ouverture des Grimoires", icon:"📖", iconBg:"#B5D4F4",
   desc:"Variables, conditions, boucles",
   tutorial:null,
   challenges:[
    {title:"Les Lanternes du Péristyle",
     narrative:"Tu te trouves dans le péristyle de l'Académie Codex Mundi. Des lanternes magiques s'éteignent une à une le long des colonnes. Chacune porte un nom gravé dans la pierre. Pour les rallumer, tu dois apprendre à invoquer un nom par le code.",
     task:"Stocke <code>\"Lumios\"</code> dans une variable <code>nom</code>. Stocke <code>\"s'allume !\"</code> dans une variable <code>message</code>. Affiche la concaténation des deux, séparée par un espace.",
     starter:"# Stocke les deux variables\n\n\n# Affiche la concaténation\n",
     expected:"Lumios s'allume !",
     hint1:"Utilise <code>+</code> pour concaténer deux chaînes, et <code>\" \"</code> pour ajouter un espace entre elles.",
     hint2:"Construis l'affichage en trois parties reliées par + : la variable nom, puis un espace \" \", puis la variable message.",
     maxLines:2},
    {title:"Le Portail Scellé",
     narrative:"L'entrée principale de l'Académie est scellée par un portail de cristal. Une inscription gravée dit : 'Seuls les initiés dont le rang dépasse 10 peuvent franchir ce seuil.' Tu dois saisir le nombre pour l'ouvrir.",
     task:"Stocke le nombre <code>12</code> dans une variable <code>rang</code>. Si rang &gt; 10, affiche <code>Portail ouvert</code>. Sinon affiche <code>Portail ferme</code>.",
     starter:"# Stocke rang\n\n# Teste et affiche\n",
     expected:"Portail ouvert",
     hint1:"Utilise <code>if</code> / <code>else</code> avec la condition <code>rang &gt; 10</code>. Chaque branche contient un <code>print()</code> indenté.",
     hint2:"Un bloc if/else a deux branches : celle qui s'exécute si la condition est vraie, et celle qui s'exécute sinon. N'oublie pas les deux-points après if et else.",
     maxLines:4},
    {title:"Les Engrenages de la Tour",
     narrative:"Une immense roue à vapeur actionne les portes intérieures de l'Académie. Pour l'activer, elle doit effectuer exactement 5 rotations. Chaque rotation doit être comptée et affichée.",
     task:"Écris une boucle <code>for</code> qui affiche les entiers de 1 à 5, un par ligne.",
     starter:"# Ta boucle ici\n",
     expected:"1\n2\n3\n4\n5",
     hint1:"<code>range(a, b)</code> génère les entiers de a jusqu'à b-1 inclus. N'oublie pas les deux-points après le <code>for</code>.",
     hint2:"Réfléchis aux bornes : pour obtenir 1, 2, 3, 4, 5, quelles valeurs de début et de fin donner à range() ?",
     maxLines:2},
    {title:"Le Mot de Passe Ancien",
     narrative:"Une sentinelle mécanique garde l'accès à la bibliothèque centrale. Elle ne s'écarte que si le mot de passe stocké dans sa mémoire correspond exactement au code gravé sur le portail.",
     task:"Stocke <code>\"arcane\"</code> dans une variable <code>code</code>. Si code vaut <code>\"arcane\"</code>, affiche <code>Acces accorde</code>. Sinon affiche <code>Acces refuse</code>.",
     starter:"# Stocke le code\n\n# Teste et affiche\n",
     expected:"Acces accorde",
     hint1:"Utilise <code>==</code> pour comparer deux chaînes de caractères. Attention : <code>=</code> stocke une valeur, <code>==</code> la compare.",
     hint2:"La condition du if doit comparer la variable code à la chaîne \"arcane\" avec l'opérateur ==.",
     maxLines:4},
    {title:"La Pompe à Vapeur",
     narrative:"Les salles intérieures de l'Académie sont alimentées par une pompe à vapeur. Elle doit monter en pression progressivement, palier par palier, jusqu'à atteindre le niveau 5.",
     task:"Pars de <code>pression = 0</code>. Écris une boucle <code>while</code> qui, tant que pression &lt; 5, ajoute 1 à pression et affiche pression.",
     starter:"pression = 0\n# Ta boucle while ici\n",
     expected:"1\n2\n3\n4\n5",
     hint1:"Une boucle <code>while</code> continue tant que la condition est vraie. N'oublie pas de modifier la variable dans la boucle, sinon elle ne s'arrête jamais.",
     hint2:"Dans la boucle, il faut d'abord augmenter pression (pression = pression + 1), puis l'afficher — dans cet ordre précis.",
     maxLines:3},
    {title:"La Classification des Potions",
     narrative:"En pénétrant dans la première salle, tu découvres l'officine du maître apothicaire. Des centaines de fioles sont rangées sur des étagères, chacune étiquetée selon sa puissance. Mais les étiquettes se sont effacées — il faut les reconstituer.",
     task:"Stocke la valeur <code>75</code> dans une variable <code>niveau</code>. Si niveau ≥ 80 affiche <code>Magie majeure</code>, si niveau ≥ 50 affiche <code>Magie standard</code>, sinon affiche <code>Magie mineure</code>.",
     starter:"# Stocke 75 dans niveau\n\n# Utilise if / elif / else\n",
     expected:"Magie standard",
     hint1:"<code>elif</code> permet d'ajouter une condition intermédiaire entre <code>if</code> et <code>else</code>. En Python, ≥ s'écrit <code>>=</code>.",
     hint2:"Teste d'abord le seuil le plus élevé (80), puis le suivant (50). L'ordre est important : si tu testes 50 en premier, les valeurs ≥ 80 seront rattrapées trop tôt.",
     maxLines:6}
   ]},
  {name:"La Chambre des Incantations", icon:"✨", iconBg:"#CECBF6",
   desc:"Fonctions sans paramètre ni return",
   tutorial:{
     title:"Qu'est-ce qu'une fonction ?",
     icon:"✨",
     content:"<p>Dans la Chambre des Incantations, les sorciers gravent des <strong>formules réutilisables</strong>. En Python, on appelle ça une <strong>fonction</strong>.</p><p>On la <strong>définit</strong> une fois avec <code>def</code>, puis on l'<strong>appelle</strong> autant de fois qu'on veut :</p><pre>def sonner_alarme():\n    print(\"ALARME !\")   # le contenu est indenté\n\nsonner_alarme()          # appel de la fonction\nsonner_alarme()          # on peut l'appeler plusieurs fois</pre><p>⚠️ Ne pas oublier les <strong>parenthèses</strong> <code>()</code> lors de l'appel, sinon la fonction ne s'exécute pas.</p>"
   },
   challenges:[
    {title:"La Première Formule",
     narrative:"Tu pénètres dans la Chambre des Incantations. Les murs sont couverts de symboles éteints. L'Archimage t'explique : 'Une incantation est un geste que tu définis une fois et répètes à l'infini. Grave-la dans le grimoire, puis prononce-la.'",
     task:"Définis une fonction <code>reveiller_salle()</code> qui affiche <code>La salle s'eveille.</code>. Appelle-la une fois.",
     starter:"# Définis la fonction\n\n\n# Appelle-la\n",
     expected:"La salle s'eveille.",
     hint1:"<code>def reveiller_salle():</code> — puis indente le <code>print()</code> avec 4 espaces. Les deux-points après <code>()</code> sont obligatoires.",
     hint2:"Pour appeler une fonction, écris son nom suivi de parenthèses vides : <code>reveiller_salle()</code> — sans <code>def</code>, sans les deux-points.",
     maxLines:3},
    {title:"L'Alarme des Couloirs",
     narrative:"Les couloirs de l'Académie sont silencieux depuis trop longtemps. Pour signaler que la magie revient, il faut déclencher l'alarme — plusieurs fois de suite, en utilisant une boucle.",
     task:"Définis <code>sonner_alarme()</code> qui affiche <code>ALARME !</code>. Puis utilise une boucle <code>for</code> pour l'appeler trois fois.",
     starter:"# Définis la fonction\n\n\n# Boucle for pour l'appeler 3 fois\n",
     expected:"ALARME !\nALARME !\nALARME !",
     hint1:"<code>range(3)</code> génère 3 itérations. Dans la boucle, appelle la fonction avec son nom suivi de <code>()</code>.",
     hint2:"Dans le corps de la boucle (indenté), écris simplement le nom de la fonction suivi de () pour l'appeler à chaque tour.",
     maxLines:5},
    {title:"Le Carillon des Heures",
     narrative:"La grande horloge de la tour n'a pas sonné depuis des années. Elle alterne entre deux sons : Ding pour les heures impaires, Dong pour les heures paires. Programme les deux incantations et fais sonner l'horloge 6 fois.",
     task:"Définis <code>carillon()</code> qui affiche <code>Ding !</code> et <code>cloche()</code> qui affiche <code>Dong !</code>. Avec une boucle <code>for</code> de 1 à 6, appelle <code>carillon()</code> si i est impair (<code>i % 2 != 0</code>), sinon <code>cloche()</code>.",
     starter:"# Définis les deux fonctions\n\n\n\n# Boucle for de 1 à 6\n",
     expected:"Ding !\nDong !\nDing !\nDong !\nDing !\nDong !",
     hint1:"<code>i % 2</code> donne le reste de la division de i par 2. Si ce reste est 0, i est pair ; sinon i est impair.",
     hint2:"Dans la boucle, un if/else permet de choisir quelle fonction appeler selon la parité de i. Les appels de fonctions sont indentés dans la boucle.",
     maxLines:9},
    {title:"Le Duo d'Incantations",
     narrative:"Pour traverser le couloir final de la Chambre, deux sorts doivent être prononcés dans le bon ordre : l'un pour ouvrir le passage, l'autre pour le refermer derrière toi.",
     task:"Définis <code>ouvrir_portail()</code> qui affiche <code>Portail ouvert.</code> et <code>fermer_portail()</code> qui affiche <code>Portail ferme.</code>. Appelle-les dans cet ordre.",
     starter:"# Définis les deux fonctions\n\n\n\n# Appelle-les dans l'ordre\n",
     expected:"Portail ouvert.\nPortail ferme.",
     hint1:"Définis deux fonctions séparées, chacune avec son propre <code>def</code> et son propre <code>print()</code> indenté.",
     hint2:"L'ordre des appels détermine l'ordre d'affichage. Appelle d'abord ouvrir_portail(), puis fermer_portail().",
     maxLines:7}
   ]},
  {name:"L'Antre des Alchimistes", icon:"⚗️", iconBg:"#F5C4B3",
   desc:"Fonctions avec paramètres et return",
   tutorial:{
     title:"Passer un argument à une fonction",
     icon:"⚗️",
     content:"<p>Une fonction peut recevoir une <strong>valeur en entrée</strong>, appelée <strong>paramètre</strong>. Cela la rend plus puissante car elle peut produire un résultat différent selon ce qu'on lui donne :</p><pre>def saluer(nom):\n    print(\"Bonjour, \" + nom)\n\nsaluer(\"Elara\")   # affiche : Bonjour, Elara\nsaluer(\"Kael\")    # affiche : Bonjour, Kael</pre><p>Le paramètre <code>nom</code> est une variable locale à la fonction — elle reçoit la valeur passée lors de l'appel.</p>"
   },
   challenges:[
    {title:"L'Élixir Nommé",
     narrative:"Tu entres dans l'Antre des Alchimistes. Des alambics fument, des fioles scintillent. Le maître alchimiste t'enseigne : 'Un sort vraiment puissant accepte un ingrédient et produit un résultat précis. C'est la transmutation.'",
     task:"Définis <code>nommer_elixir(nom)</code> qui affiche <code>Elixir : </code> suivi du nom. Appelle-la avec <code>\"Azurite\"</code>.",
     starter:"# Définis la fonction avec paramètre\n\n# Appelle-la\n",
     expected:"Elixir : Azurite",
     hint1:"<code>def nommer_elixir(nom):</code> — le paramètre <code>nom</code> reçoit la valeur passée lors de l'appel.",
     hint2:"Dans le print(), concatène la chaîne fixe \"Elixir : \" avec la variable nom en utilisant +.",
     maxLines:3},
    {title:"La Formule du Double",
     narrative:"L'alchimiste a découvert une essence rare qui double de volume quand on la chauffe. Il a besoin d'une formule magique qui reçoit un volume en entrée et renvoie le double. Le résultat doit être stocké avant d'être affiché.",
     task:"Définis <code>doubler(n)</code> qui renvoie n × 2. Stocke le résultat de <code>doubler(7)</code> dans une variable <code>r</code> et affiche <code>r</code>.",
     starter:"# Définis la fonction avec return\n\n# Stocke le résultat dans r et affiche\n",
     expected:"14",
     checkVars:{r:14},
     hint1:"Le mot-clé <code>return</code> permet à une fonction de renvoyer une valeur. Cette valeur peut ensuite être stockée dans une variable.",
     hint2:"r = doubler(7) stocke le résultat dans r. Ensuite print(r) l'affiche. La fonction doit utiliser return, pas print().",
     maxLines:4},
    {title:"L'Élixir Pair ou Impair",
     narrative:"Certaines formules ne réagissent qu'aux quantités paires d'ingrédients, d'autres aux quantités impaires. La fonction doit déterminer la nature du nombre pour choisir la bonne réaction.",
     task:"Définis <code>parite(n)</code> qui renvoie <code>\"pair\"</code> si n est divisible par 2, sinon <code>\"impair\"</code>. Affiche le résultat de <code>parite(9)</code>.",
     starter:"# Définis la fonction\n\n# Affiche le résultat\n",
     expected:"impair",
     hint1:"<code>n % 2 == 0</code> est vrai si n est pair. La fonction renvoie des chaînes entre guillemets : <code>\"pair\"</code> et <code>\"impair\"</code>.",
     hint2:"La fonction utilise if/else à l'intérieur et renvoie une valeur avec return dans chaque branche. Ensuite print(parite(9)) affiche le résultat.",
     maxLines:6},
    {title:"La Puissance des Essences",
     narrative:"Le maître alchimiste te confie son secret le plus précieux : la transmutation par puissance. En combinant deux essences, l'une devient la base et l'autre l'exposant — la réaction produit une énergie colossale.",
     task:"Définis <code>puissance(a, b)</code> qui renvoie a élevé à la puissance b. En Python, a à la puissance b s'écrit <code>a ** b</code>. Affiche le résultat de <code>puissance(2, 8)</code>.",
     starter:"# Définis la fonction à deux paramètres\n# (rappel : a à la puissance b s'écrit a ** b)\n\n# Affiche le résultat\n",
     expected:"256",
     hint1:"<code>**</code> est l'opérateur puissance en Python : <code>2 ** 8</code> vaut 256. La fonction prend deux paramètres et renvoie le résultat avec <code>return</code>.",
     hint2:"La fonction a deux paramètres a et b, calcule a ** b et le renvoie. Ensuite print(puissance(2, 8)) affiche le résultat.",
     maxLines:3}
   ]},
  {name:"La Salle des Archives", icon:"🗄️", iconBg:"#C0DD97",
   desc:"Listes, indexation et manipulation",
   tutorial:{
     title:"Les listes en Python",
     icon:"🗄️",
     content:"<p>Une <strong>liste</strong> est une collection ordonnée d'éléments. Chaque élément a une <strong>position numérotée à partir de 0</strong> :</p><pre>elements = [\"Air\", \"Feu\", \"Eau\"]\nprint(len(elements))   # 3 — longueur de la liste\nprint(elements[0])     # \"Air\" — premier élément\nprint(elements[-1])    # \"Eau\" — dernier élément</pre><p>On peut <strong>modifier</strong>, <strong>ajouter</strong> et <strong>retirer</strong> des éléments :</p><pre>elements[1] = \"Feu magique\"  # modification\nelements.append(\"Terre\")     # ajout en fin de liste\nelements.pop()               # retire le dernier élément</pre><p>Pour <strong>parcourir</strong> une liste :</p><pre>for x in elements:\n    print(x)</pre>"
   },
   challenges:[
    {title:"L'Inventaire des Éléments",
     narrative:"Tu pousses la dernière porte et tu découvres la Salle des Archives. Des étagères infinies s'étendent devant toi, chargées de parchemins éparpillés. L'archiviste t'explique : 'Une liste est une étagère ordonnée — chaque objet a sa place numérotée à partir de zéro.'",
     task:"Crée une liste <code>elements</code> qui contient les quatre mots <code>\"Air\"</code>, <code>\"Feu\"</code>, <code>\"Eau\"</code>, <code>\"Terre\"</code>. Affiche sa longueur avec <code>len()</code>.",
     starter:"# Crée la liste elements\n\n# Affiche sa longueur\n",
     expected:"4",
     hint1:"Une liste se crée avec des crochets : <code>ma_liste = [valeur1, valeur2, ...]</code>. Chaque élément est séparé par une virgule.",
     hint2:"<code>len(elements)</code> renvoie le nombre d'éléments. Passe ce résultat directement à <code>print()</code>.",
     maxLines:2},
    {title:"La Consultation des Rayons",
     narrative:"L'archiviste te montre comment consulter une étagère. 'Souviens-toi : le premier parchemin est au rang zéro. C'est la loi fondamentale des archives.'",
     task:"Crée une liste <code>potions</code> contenant trois couleurs : <code>\"rouge\"</code>, <code>\"bleue\"</code>, <code>\"verte\"</code>. Affiche le premier élément, puis le dernier.",
     starter:"# Crée la liste potions\n\n# Affiche le premier et le dernier élément\n",
     expected:"rouge\nverte",
     hint1:"On accède à un élément par son index entre crochets : <code>liste[0]</code> est le premier. Un index négatif compte depuis la fin : <code>liste[-1]</code> est le dernier.",
     hint2:"Deux print() séparés : un pour potions[0], un pour potions[-1].",
     maxLines:3},
    {title:"L'Ajout au Registre",
     narrative:"Un messager arrive en courant : un quatrième élément vient d'être redécouvert. L'archiviste te demande de l'ajouter immédiatement à la liste des éléments et d'afficher chacun d'eux.",
     task:"Pars de <code>elements = [\"Air\", \"Feu\", \"Eau\"]</code>. Ajoute <code>\"Terre\"</code> avec <code>append</code>. Affiche chaque élément avec une boucle <code>for</code>.",
     starter:"elements = [\"Air\", \"Feu\", \"Eau\"]\n# Ajoute \"Terre\"\n\n# Affiche chaque élément\n",
     expected:"Air\nFeu\nEau\nTerre",
     hint1:"<code>liste.append(valeur)</code> ajoute un élément à la fin. Ensuite <code>for x in liste:</code> parcourt chaque élément.",
     hint2:"Après le append, une boucle for x in elements: avec print(x) indenté affichera chaque élément.",
     maxLines:3},
    {title:"La Correction du Registre",
     narrative:"En parcourant les archives, tu découvres une erreur : le nom d'une constellation a été mal orthographié. L'archiviste te montre comment parcourir la liste par index pour détecter et corriger l'erreur.",
     task:"Pars de <code>registre = [\"lune\", \"soleil\", \"etoille\"]</code>. Parcours avec <code>for i in range(len(registre))</code>. Si <code>registre[i]</code> vaut <code>\"etoille\"</code>, remplace-le par <code>\"etoile\"</code>. Affiche ensuite chaque élément.",
     starter:"registre = [\"lune\", \"soleil\", \"etoille\"]\n# Parcours avec range(len(...))\n\n# Affiche chaque élément\n",
     expected:"lune\nsoleil\netoile",
     hint1:"<code>range(len(registre))</code> génère les indices 0, 1, 2... Utilise <code>registre[i]</code> pour lire ou modifier l'élément à la position i.",
     hint2:"Dans la boucle : if registre[i] == \"etoille\": puis registre[i] = \"etoile\". Ensuite une boucle for x in registre: affiche les éléments corrigés.",
     maxLines:6},
    {title:"Le Bestiaire de l'Académie",
     narrative:"Dans un recoin des archives, tu découvres le Bestiaire de l'Académie — la liste de toutes les créatures magiques recensées. Le Basilic, la dernière créature, vient d'être libéré. Retire-le du registre et récite les noms de celles qui restent, une par ligne.",
     task:"Pars de <code>bestiaire = [\"Sphinx\", \"Griffon\", \"Hydre\", \"Basilic\"]</code>. Retire le dernier élément avec <code>pop()</code>. Affiche chaque créature restante, une par ligne.",
     starter:"bestiaire = [\"Sphinx\", \"Griffon\", \"Hydre\", \"Basilic\"]\n# Retire le dernier élément\n\n# Affiche chaque créature\n",
     expected:"Sphinx\nGriffon\nHydre",
     hint1:"<code>liste.pop()</code> retire et renvoie le dernier élément. La liste est ensuite modifiée.",
     hint2:"Après le pop(), une boucle for x in bestiaire: avec print(x) affiche les créatures restantes.",
     maxLines:3}
   ]}
];

const RETURN_TUTORIAL = {
  title:"Ce que renvoie une fonction",
  icon:"⚗️",
  content:"<p>Une fonction peut <strong>renvoyer un résultat</strong> avec le mot-clé <code>return</code>. Ce résultat peut ensuite être stocké dans une variable ou affiché :</p><pre>def doubler(n):\n    return n * 2     # la fonction renvoie une valeur\n\nr = doubler(7)       # on stocke le résultat dans r\nprint(r)             # on affiche r → 14</pre><p>⚠️ <code>return</code> et <code>print()</code> ne font pas la même chose :</p><ul><li><code>print()</code> affiche à l'écran mais ne renvoie rien d'utilisable.</li><li><code>return</code> renvoie une valeur que le programme peut utiliser.</li></ul>"
};

const TITLES = [
  {min:0.9, label:"Grand Sorcier de la Vapeur"},
  {min:0.7, label:"Mage Émérite"},
  {min:0.5, label:"Enchanteur Novice"},
  {min:0,   label:"Apprenti Sorcier"}
];

let G = {player:"", crystals:0, progress:{}, curIsle:0, curCh:0, returnSeen:false};
let pyodide = null;
let pyReady = false;

async function loadPy(){
  try{
    pyodide = await loadPyodide();
    pyReady = true;
    const el = document.getElementById('py-loader');
    el.classList.add('ready');
    document.getElementById('py-status').textContent = 'Python prêt';
    setTimeout(()=>{ el.style.display='none'; }, 2000);
  } catch(e){
    document.getElementById('py-status').textContent = 'Erreur Python';
  }
}

function friendlyError(msg){
  if(msg.includes('IndentationError'))
    return "Erreur d'indentation — vérifie les espaces en début de ligne";
  if(msg.includes('SyntaxError') && (msg.includes('elif') || msg.includes("invalid syntax")))
    return "Erreur de syntaxe — il manque peut-être une condition après elif ou if, ou un else ne doit pas avoir de condition";
  if(msg.includes('SyntaxError'))
    return "Erreur de syntaxe — vérifie les parenthèses, guillemets ou deux-points";
  if(msg.includes('NameError'))
    return "Variable ou fonction inconnue — vérifie l'orthographe du nom";
  if(msg.includes('not callable'))
    return "Cette valeur n'est pas une fonction — as-tu oublié les parenthèses () lors de l'appel ?";
  if(msg.includes('TypeError'))
    return "Erreur de type — tu mélanges peut-être un nombre et du texte";
  if(msg.includes('ValueError'))
    return "Valeur incorrecte — le contenu ne correspond pas à ce qu'attend la fonction";
  if(msg.includes('ZeroDivisionError'))
    return "Impossible de diviser par zéro";
  if(msg.includes('IndexError'))
    return "Index hors limites — la liste n'a pas autant d'éléments";
  return "Une erreur s'est produite — relis ton code ligne par ligne";
}

async function runPython(code){
  if(!pyReady) return {ok:false, output:"Python pas encore chargé, patiente quelques secondes..."};
  // Détecter appel sans ()
  const lines = code.split('\n').map(l=>l.trim()).filter(l=>l && !l.startsWith('#'));
  for(const line of lines){
    if(/^[a-z_][a-z_0-9]*$/.test(line) && code.includes('def ')){
      return {ok:false, output:`"${line}" est défini mais pas appelé — as-tu oublié les parenthèses : ${line}() ?`};
    }
  }
  try{
    const wrapped = `
import sys
from io import StringIO
_buf = StringIO()
_old = sys.stdout
sys.stdout = _buf
try:
${code.split('\n').map(l=>'    '+l).join('\n')}
finally:
    sys.stdout = _old
_out = _buf.getvalue()
`;
    await pyodide.runPythonAsync(wrapped);
    const out = pyodide.globals.get("_out");
    return {ok:true, output: out ? out.trimEnd() : ""};
  } catch(e){
    let msg = e.message || String(e);
    const parts = msg.split('\n').map(l=>l.trim()).filter(l=>l.length>0);
    const errLine = parts.find(l=>l.includes('Error')) || parts[parts.length-1] || msg;
    return {ok:false, output: friendlyError(errLine)};
  }
}

async function checkPythonVar(name, expectedVal){
  try{
    await pyodide.runPythonAsync(`_chk = (${name} == ${JSON.stringify(expectedVal)})`);
    return pyodide.globals.get("_chk");
  } catch(e){ return false; }
}

function syncCrystals(){
  document.getElementById('crystals-map').textContent = G.crystals;
  document.getElementById('crystals-ch').textContent = G.crystals;
}

const BG_IMAGES = {
  'login':   'images/bg-splash.png',
  's-oath':  'images/bg-splash.png',
  's-map':   'images/bg-splash.png',
  'salle-0': 'images/bg-salle0.png',
  'salle-1': 'images/bg-salle1.png',
  'salle-2': 'images/bg-salle2.png',
  'salle-3': 'images/bg-salle3.png'
};

let _bgCurrent = '';
let _bgUsing = 'a';

function setBg(key){
  const url = BG_IMAGES[key];
  if(!url || url === _bgCurrent) return;
  _bgCurrent = url;
  const next = _bgUsing === 'a' ? 'b' : 'a';
  const elNext = document.getElementById('bg-' + next);
  const elCur  = document.getElementById('bg-' + _bgUsing);
  elNext.style.backgroundImage = `url('${url}')`;
  elNext.style.opacity = '1';
  elCur.style.opacity  = '0';
  _bgUsing = next;
}

function showScreen(id){
  document.querySelectorAll('.screen, #s-login').forEach(el=>{
    el.classList.remove('active');
    if(el.id !== 's-login') el.style.display='';
  });
  const el = document.getElementById(id);
  el.classList.add('active');
  el.style.display='flex';
  window.scrollTo(0,0);
  // Fond selon l'écran
  if(id === 's-login') setBg('login');
  else if(id === 's-oath') setBg('s-oath');
  else if(id === 's-map') setBg('s-map');
  else if(id === 's-challenge') setBg('salle-' + G.curIsle);
}

function showTutorial(tuto, onClose){
  document.getElementById('tuto-icon').textContent = tuto.icon;
  document.getElementById('tuto-title').textContent = tuto.title;
  document.getElementById('tuto-content').innerHTML = tuto.content;
  document.getElementById('tuto-close').onclick = ()=>{
    document.getElementById('tuto-overlay').style.display='none';
    if(onClose) onClose();
  };
  document.getElementById('tuto-overlay').style.display='flex';
}

async function loadProgress(pseudo, onDone){
  if(!CONFIG.SCRIPT_URL || CONFIG.SCRIPT_URL.includes('COLLE_ICI')){
    onDone(); return;
  }
  try{
    const url = CONFIG.SCRIPT_URL + '?action=load&pseudo=' + encodeURIComponent(pseudo);
    const res = await fetch(url);
    const data = await res.json();
    if(data.ok && data.found){
      G.crystals = data.cristaux || 0;
      G.progress = {};
      for(let i=0; i<4; i++){
        G.progress[i] = data.progress[i] || [];
      }
      // Si déjà entré dans l'académie, aller directement à la carte
      const totalDone = Object.values(G.progress).filter(Array.isArray).reduce((s,a)=>s+a.length,0);
      if(totalDone > 0 || G.crystals > 0){
        document.getElementById('ptag').textContent = pseudo;
        syncCrystals();
        showScreen('s-map');
        renderMap();
        updateTitleBanner();
        return;
      }
    }
  } catch(e){ /* silencieux si pas de connexion */ }
  onDone();
}

function saveProgress(){
  if(!CONFIG.SCRIPT_URL || CONFIG.SCRIPT_URL.includes('COLLE_ICI')) return;
  const progressToSave = {};
  for(let i=0; i<4; i++){
    progressToSave[i] = G.progress[i] || [];
  }
  const url = CONFIG.SCRIPT_URL
    + '?action=save'
    + '&pseudo=' + encodeURIComponent(G.player)
    + '&cristaux=' + G.crystals
    + '&progress=' + encodeURIComponent(JSON.stringify(progressToSave));
  fetch(url).catch(()=>{});
}

function doLogin(){
  const p = document.getElementById('pseudo').value.trim();
  if(!p) return;
  G.player = p;
  document.getElementById('oath-narrative').textContent =
    p + ', un vent mystérieux t\'a conduit jusqu\'aux portes de l\'Académie Codex Mundi. Le Maître des Grimoires t\'attend. Pour prouver que tu es digne d\'entrer, réalise ta première invocation.';
  loadProgress(p, ()=> showScreen('s-oath'));
}

async function runOath(){
  const code = document.getElementById('oath-editor').value;
  const outEl = document.getElementById('oath-output');
  outEl.textContent = '...'; outEl.className = 'output-box';
  const res = await runPython(code);
  outEl.textContent = res.output || '(aucune sortie)';
  if(!res.ok){ outEl.className='output-box err'; return; }
  if(res.output === 'Je veux devenir un sorcier du code'){
    outEl.className='output-box ok';
    G.crystals=3; syncCrystals();
    document.getElementById('oath-success').style.display='block';
  } else { outEl.className='output-box err'; }
}

function goMap(){
  document.getElementById('ptag').textContent = G.player;
  syncCrystals(); showScreen('s-map'); renderMap(); updateTitleBanner();
}

function countMeaningfulLines(code){
  return code.split('\n').filter(l=>l.trim()!==''&&!l.trim().startsWith('#')).length;
}

function getTitle(){
  const maxC = ISLANDS.reduce((s,isl)=>s+isl.challenges.length*5,0)+ISLANDS.length*5;
  const ratio = G.crystals/maxC;
  for(const t of TITLES) if(ratio>=t.min) return t.label;
  return TITLES[TITLES.length-1].label;
}

function updateTitleBanner(){
  const done = Object.values(G.progress).filter(v=>Array.isArray(v)).reduce((s,arr)=>s+arr.length,0);
  const banner = document.getElementById('title-banner');
  if(done>0){ document.getElementById('title-name').textContent=getTitle(); banner.style.display='block'; }
  else banner.style.display='none';
}

function renderMap(){
  const grid = document.getElementById('islands');
  grid.innerHTML='';
  ISLANDS.forEach((isl,i)=>{
    const done=(G.progress[i]||[]).length;
    const total=isl.challenges.length;
    const prevOk=i===0||(G.progress[i-1]||[]).length>=ISLANDS[i-1].challenges.length;
    const isLocked=!prevOk;
    const isActive=!isLocked&&done<total;
    const card=document.createElement('div');
    card.className='island-card'+(isLocked?' locked':'')+(isActive?' active-isle':'');
    card.onclick=()=>{ if(!isLocked&&total>0) openIsland(i); };
    const dots=isl.challenges.map((_,ci)=>{
      const isDone=(G.progress[i]||[]).includes(ci);
      const isCur=!isDone&&ci===(G.progress[i]||[]).length;
      const isLock=ci>(G.progress[i]||[]).length;
      return `<div class="dot ${isDone?'done':isCur?'current':isLock?'dot-locked':''}">${isDone?'✓':ci+1}</div>`;
    }).join('');
    card.innerHTML=`
      <div class="isle-row">
        <div class="isle-icon" style="background:${isl.iconBg}">${isl.icon}</div>
        <div><div class="isle-name">${isl.name}</div><div class="isle-desc">${isl.desc}</div></div>
        <div class="isle-prog">${done}/${total}</div>
      </div>
      <div class="dots">${dots}</div>`;
    grid.appendChild(card);
  });
}

function openIsland(i){
  const isl=ISLANDS[i];
  const done=(G.progress[i]||[]).length;
  const firstVisit=done===0&&!G.progress[i+'_seen'];
  if(isl.tutorial&&firstVisit){
    G.progress[i+'_seen']=true;
    showTutorial(isl.tutorial,()=>_doOpenChallenge(i,0));
  } else {
    _doOpenChallenge(i,Math.min(done,isl.challenges.length-1));
  }
}

function openChallenge(ii,ci){
  if(ii===2&&ci===2&&!G.returnSeen){
    G.returnSeen=true;
    showTutorial(RETURN_TUTORIAL,()=>_doOpenChallenge(ii,ci));
    return;
  }
  _doOpenChallenge(ii,ci);
}

function _doOpenChallenge(ii,ci){
  const isl=ISLANDS[ii]; const ch=isl.challenges[ci];
  G.curIsle=ii; G.curCh=ci;
  document.getElementById('ch-title').textContent=isl.icon+' '+ch.title;
  document.getElementById('ptag2').textContent=G.player;
  document.getElementById('ch-narrative').textContent=ch.narrative;
  document.getElementById('ch-task').innerHTML=ch.task;
  document.getElementById('ch-editor').value=ch.starter;
  const outEl=document.getElementById('ch-output');
  outEl.textContent='La sortie de ton sort apparaîtra ici...';
  outEl.className='output-box';
  document.getElementById('ch-success').style.display='none';
  syncCrystals(); showScreen('s-challenge');
}

function useHint(type){
  const ch=ISLANDS[G.curIsle].challenges[G.curCh];
  const cost=type===1?1:3;
  if(G.crystals<cost){ alert('Pas assez de cristaux d\'éther !'); return; }
  if(!confirm((type===1?'Indice syntaxe (−1 cristal)':'Indice logique (−3 cristaux)')+'\n\nAfficher ?')) return;
  G.crystals-=cost; syncCrystals();
  const hint=type===1?ch.hint1:ch.hint2;
  showTutorial({title:type===1?'Indice syntaxe':'Indice logique', icon:'💎', content:`<p>${hint}</p>`}, null);
}

async function runCode(){
  const code=document.getElementById('ch-editor').value;
  const ch=ISLANDS[G.curIsle].challenges[G.curCh];
  const outEl=document.getElementById('ch-output');
  outEl.textContent='...'; outEl.className='output-box';
  const res=await runPython(code);
  outEl.textContent=res.output||'(aucune sortie)';
  if(!res.ok){ outEl.className='output-box err'; return; }
  const outputOk=res.output===ch.expected;
  outEl.className='output-box '+(outputOk?'ok':'err');
  if(!outputOk) return;
  if(ch.checkVars){
    for(const [varName,val] of Object.entries(ch.checkVars)){
      const ok=await checkPythonVar(varName,val);
      if(!ok){
        outEl.className='output-box err';
        outEl.textContent=`Résultat correct, mais stocke-le dans une variable nommée "${varName}" !`;
        return;
      }
    }
  }
  const alreadyDone=(G.progress[G.curIsle]||[]).includes(G.curCh);
  if(!alreadyDone){
    G.progress[G.curIsle]=G.progress[G.curIsle]||[];
    G.progress[G.curIsle].push(G.curCh);
    let gained=3, bonusMsg='';
    const lines=countMeaningfulLines(code);
    if(ch.maxLines&&lines<=ch.maxLines){ gained+=2; bonusMsg+=' +2 (code élégant !)'; }
    G.crystals+=gained;
    const isleComplete=G.progress[G.curIsle].length===ISLANDS[G.curIsle].challenges.length;
    if(isleComplete){ G.crystals+=5; bonusMsg+=' +5 (salle complète !)'; }
    syncCrystals();
    document.getElementById('success-msg').textContent='Sort maîtrisé — l\'éther scintille !';
    document.getElementById('success-rewards').textContent='+3 cristaux d\'éther'+bonusMsg;
    saveProgress();
  } else {
    document.getElementById('success-msg').textContent='Déjà maîtrisé — bien joué !';
    document.getElementById('success-rewards').textContent='';
  }
  const isLast=G.curCh===ISLANDS[G.curIsle].challenges.length-1;
  const btn=document.getElementById('next-btn');
  if(isLast){ btn.textContent='Retour à la carte →'; btn.onclick=goMap; }
  else { btn.textContent='Défi suivant →'; btn.onclick=nextChallenge; }
  document.getElementById('ch-success').style.display='block';
}

function nextChallenge(){
  const next=G.curCh+1;
  if(next<ISLANDS[G.curIsle].challenges.length) openChallenge(G.curIsle,next);
  else goMap();
}

document.getElementById('pseudo').addEventListener('keydown',e=>{ if(e.key==='Enter') doLogin(); });
setBg('login');
showScreen('s-login');
loadPy();
