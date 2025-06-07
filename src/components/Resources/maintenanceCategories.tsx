import React from 'react';

import { FaFan,  FaWrench, FaMemory } from 'react-icons/fa'; 

import { MaintenanceCategory } from '../../interfaces/Actividades';
import { MaintenanceDetailContent } from '../../interfaces/Actividades';
export const maintenanceCategories: MaintenanceCategory[] = [
  {
    id: 'ventilacion',
    title: 'Mantén buena ventilación',
    icon: <FaFan size={60} />, 
    shortDescription: 'Asegúrate de que el equipo tenga espacio para disipar el calor y no se sobrecaliente. Evita obstruir las rejillas de ventilación.',
    color: 'bg-green-600', 
  },
  {
    id: 'cables',
    title: 'Asegura bien los cables',
    icon:  <FaWrench size={60} />, 
    shortDescription: 'Si abres el gabinete, verifica que todos los cables internos estén correctamente conectados para evitar fallos y cortocircuitos.',
    color: 'bg-green-600',
  },
  {
    id: 'mantenimiento-preventivo',
    title: 'Hazle mantenimiento preventivo',
    icon: <FaWrench size={60} />,
    shortDescription: 'No esperes a que falle. Realiza limpiezas periódicas del polvo y revisiones de componentes para alargar su vida útil.',
    color: 'bg-green-600',
  },
  {
    id: 'evitar-tocar-pines',
    title: 'Evita tocar los pines',
    icon: <FaMemory size={60} />, 
    shortDescription: 'Nunca toques los pines del procesador o la memoria RAM directamente. La electricidad estática puede dañar los componentes.',
    color: 'bg-green-600',
  },
  
  {
    id: 'actualizaciones-software',
    title: 'Actualiza tu Software',
    icon: <FaWrench size={60} />,
    shortDescription: 'Mantén tu sistema operativo y programas al día para seguridad y rendimiento.',
    color: 'bg-green-600',
  },
  {
    id: 'copias-seguridad',
    title: 'Haz Copias de Seguridad',
    icon: <FaMemory size={60} />,
    shortDescription: 'Protege tus datos importantes realizando respaldos periódicos en un disco externo o la nube.',
    color: 'bg-green-600',
  },
];

export const maintenanceDetails: MaintenanceDetailContent[] = [
  {
    id: 'ventilacion',
    title: 'Guía Detallada para la Ventilación del Equipo',
    fullContent: `
      La ventilación es crucial para la salud de tu computadora. Un flujo de aire adecuado previene el sobrecalentamiento, que puede llevar a una disminución del rendimiento, fallos del sistema e incluso daños permanentes a los componentes.

      **Consejos clave:**
      1.  **Espacio:** Asegúrate de que tu PC tenga suficiente espacio alrededor para que el aire circule libremente. No la pegues a la pared ni la coloques en compartimentos cerrados.
      2.  **Rejillas:** Limpia regularmente las rejillas de ventilación (tanto de entrada como de salida) para evitar que el polvo las obstruya. Usa aire comprimido en ráfagas cortas, manteniendo la lata en posición vertical para evitar la expulsión de propelente líquido.
      3.  **Superficies:** Evita colocar laptops sobre superficies blandas como camas o alfombras, ya que bloquean las rejillas inferiores. Usa una base de enfriamiento o una superficie dura.
      4.  **Flujo de Aire del Gabinete (para PC de escritorio):** Si tienes una torre, verifica que los ventiladores estén configurados para crear un flujo de aire óptimo (generalmente entrada de aire fresco por el frente/abajo y salida de aire caliente por la parte trasera/superior).
      5.  **Monitoreo:** Utiliza software para monitorear la temperatura de la CPU y la GPU. Si las temperaturas son consistentemente altas (por encima de 70-80°C bajo carga), podría ser una señal de un problema de ventilación o acumulación excesiva de polvo interno.
    `,
   
  },
  {
    id: 'cables',
    title: 'Manejo y Aseguramiento de Cables Internos',
    fullContent: `
      Un buen manejo de cables dentro del gabinete no solo mejora la estética, sino que también es vital para el rendimiento y la vida útil de tu PC. Los cables desordenados pueden obstruir el flujo de aire, aumentar las temperaturas y dificultar el mantenimiento.

      **Pautas para asegurar los cables:**
      1.  **Desconexión:** Antes de abrir el gabinete, asegúrate de desconectar la computadora de la corriente eléctrica y de todos los periféricos.
      2.  **Organización:** Agrupa los cables similares (ej. cables SATA, cables de alimentación de la fuente) usando bridas de plástico o velcro. Esto reduce el volumen y facilita el manejo.
      3.  **Rutas:** Dirige los cables por la parte trasera de la bandeja de la placa base (si tu gabinete lo permite) para mantener el espacio frontal despejado.
      4.  **No obstruir ventiladores:** Asegúrate de que ningún cable esté cerca de las aspas de los ventiladores, ya que podría interferir con su rotación y causar ruido o daños.
      5.  **Conexiones Firmes:** Verifica que cada cable esté firmemente conectado a su puerto. Los cables sueltos pueden causar fallos intermitentes, reinicios o que los componentes no sean detectados.
    `,
    
  },
  {
    id: 'mantenimiento-preventivo',
    title: 'Guía Completa de Mantenimiento Preventivo',
    fullContent: `
      El mantenimiento preventivo es clave para evitar problemas mayores y costosos. No se trata solo de limpiar, sino de estar atento a las señales que te da tu equipo.

      **Aspectos del mantenimiento preventivo:**
      1.  **Limpieza de Software:** Desinstala programas que no uses, elimina archivos temporales, vacía la papelera de reciclaje y optimiza el inicio del sistema.
      2.  **Monitoreo del Disco:** Verifica la salud de tus unidades de almacenamiento (HDD/SSD) usando herramientas del sistema operativo o de terceros. Busca errores o signos de fallo.
      3.  **Revisión de Controladores:** Mantén tus controladores (drivers) de hardware actualizados. Los controladores desactualizados pueden causar problemas de compatibilidad y rendimiento.
      4.  **Monitoreo de Rendimiento:** Observa si tu computadora se ralentiza con frecuencia, si hay picos inusuales de uso de CPU/RAM, o si los programas se cuelgan. Esto puede indicar problemas que necesitan ser resueltos antes de que escalen.
      5.  **Gestión de Energía:** Configura adecuadamente los planes de energía para optimizar el consumo y el rendimiento, especialmente en laptops.
    `,
   
  },
  {
    id: 'evitar-tocar-pines',
    title: 'Importancia de No Tocar los Pines de Componentes Sensibles',
    fullContent: `
      Los pines de componentes como el procesador (CPU) y los módulos de memoria RAM son extremadamente delicados y sensibles a la electricidad estática y al daño físico.

      **Razones para evitar el contacto directo:**
      1.  **Electricidad Estática:** El cuerpo humano puede acumular cargas electrostáticas. Al tocar los pines, esta energía puede descargarse sobre el componente, dañando sus circuitos internos de forma irreversible. Siempre descarga la estática tocando una superficie metálica sin pintar o usando una pulsera antiestática.
      2.  **Daño Físico:** Los pines son muy finos y pueden doblarse o romperse con facilidad. Un pin doblado o roto puede hacer que el componente deje de funcionar correctamente o que no sea detectado por la placa base.
      3.  **Corrosión/Grasa:** El contacto con los dedos puede transferir grasa, suciedad o humedad a los pines, lo que a la larga podría causar corrosión o problemas de conexión.
      4.  **Manipulación:** Cuando manipules estos componentes, siempre sujétalos por los bordes laterales de la placa de circuito impreso (PCB), evitando tocar los conectores o los chips directamente.
    `,
    
  },
  {
    id: 'actualizaciones-software',
    title: 'Beneficios y Gestión de Actualizaciones de Software',
    fullContent: `
      Mantener tu software actualizado no es solo una recomendación, es una práctica esencial para la seguridad y el rendimiento.

      **Ventajas de las actualizaciones:**
      1.  **Seguridad Mejorada:** Las actualizaciones a menudo incluyen parches para vulnerabilidades de seguridad recién descubiertas. Esto protege tu sistema de exploits, malware y ataques cibernéticos.
      2.  **Corrección de Errores (Bugs):** Los desarrolladores lanzan actualizaciones para solucionar errores (bugs) que pueden causar bloqueos, ralentizaciones o comportamientos inesperados en el software.
      3.  **Nuevas Funcionalidades:** Con frecuencia, las actualizaciones introducen nuevas características o mejoran las existentes, enriqueciendo tu experiencia de usuario.
      4.  **Compatibilidad:** Las actualizaciones aseguran la compatibilidad con nuevo hardware, software o estándares de la industria.
      5.  **Rendimiento Optimizado:** Algunas actualizaciones están diseñadas para mejorar la eficiencia del software, resultando en un uso más rápido y fluido de los recursos del sistema.
    `,
   
  },
  {
    id: 'copias-seguridad',
    title: 'Guía Completa para Realizar Copias de Seguridad de tus Datos',
    fullContent: `
      Las copias de seguridad son la última línea de defensa contra la pérdida de datos. Un fallo del disco duro, un ataque de ransomware o un error accidental pueden borrar años de trabajo, recuerdos o información importante.

      **Estrategias de copia de seguridad:**
      1.  **Regla 3-2-1:** Mantén al menos tres copias de tus datos: dos en diferentes medios de almacenamiento (ej. disco interno y externo) y una fuera del sitio (ej. en la nube).
      2.  **Medios de Almacenamiento:**
          * **Discos Duros Externos:** Son convenientes para backups locales y rápidos.
          * **Servicios en la Nube:** (Google Drive, Dropbox, OneDrive, etc.) Ofrecen acceso desde cualquier lugar y protección contra desastres físicos.
          * **NAS (Network Attached Storage):** Para usuarios más avanzados o pequeñas empresas, un NAS ofrece un control local con funciones de red.
      3.  **Automatización:** Configura tus copias de seguridad para que se realicen automáticamente. Esto asegura que no olvides respaldar y que tus datos estén siempre actualizados.
      4.  **Pruebas:** Ocasionalmente, verifica que tus copias de seguridad se puedan restaurar correctamente. Un backup que no se puede restaurar es inútil.
      5.  **Frecuencia:** La frecuencia depende de la importancia de tus datos. Si trabajas con información crítica a diario, las copias de seguridad diarias (o incluso cada pocas horas) son recomendables. Para datos personales, una vez a la semana o al mes puede ser suficiente.
    `,
    
  },
];